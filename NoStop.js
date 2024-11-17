// ==UserScript==
// @name         USTB 不许暂停
// @namespace    https://github.com/LYOfficial/USTB-NoStop
// @version      1.5
// @description  自动播放视频并跳转到下一个视频，每5分钟刷新一次页面
// @author       LYOfficial
// @match        https://dxpx.ustb.edu.cn/videodetails/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function waitForVideoPlayer() {
        const videoPlayer = document.querySelector('video');
        if (videoPlayer) {
            setupVideoPlayer(videoPlayer);
        } else {
            setTimeout(waitForVideoPlayer, 1000);
        }
    }

    function setupVideoPlayer(videoPlayer) {
        videoPlayer.pause = function() {};
        checkCurrentVideoStatus(videoPlayer);
        videoPlayer.addEventListener('ended', function() {
            const currentVideoItem = document.querySelector('.palylists .on');
            if (currentVideoItem) {
                currentVideoItem.classList.remove('on');
                currentVideoItem.classList.add('success');

                const nextVideoItem = document.querySelector('.palylists li:not(.success):not(.on)');
                if (nextVideoItem) {
                    nextVideoItem.classList.add('on');
                    const nextVideoUrl = nextVideoItem.querySelector('p').getAttribute('title');
                    loadNextVideo(videoPlayer, nextVideoUrl);
                } else {
                    console.log('已播放完所有视频');
                }
            }
        });

        videoPlayer.play();
    }

    function checkCurrentVideoStatus(videoPlayer) {
        const currentVideoItem = document.querySelector('.palylists .on');
        if (currentVideoItem && currentVideoItem.classList.contains('success')) {
            const nextVideoItem = document.querySelector('.palylists li:not(.success):not(.on)');
            if (nextVideoItem) {
                currentVideoItem.classList.remove('on');
                nextVideoItem.classList.add('on');
                const nextVideoUrl = nextVideoItem.querySelector('p').getAttribute('title');
                loadNextVideo(videoPlayer, nextVideoUrl);
            } else {
                console.log('已播放完所有视频');
            }
        }
    }

    function loadNextVideo(videoPlayer, title) {
        const videoId = window.location.pathname.split('/')[2];
        const lessonId = window.location.pathname.split('/')[3];
        const apiUrl = `https://dxpx.ustb.edu.cn/trainingApi/v1/lesson/lessonVideoResourceList?videoId=${videoId}&lessonId=${lessonId}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.code === 99999) {
                    const playList = data.data.playList;
                    const video = playList.find(video => video.resourceTitle === title);
                    if (video) {
                        videoPlayer.src = video.resourceUrl;
                        videoPlayer.play();
                    } else {
                        console.error('未找到下一个视频的URL');
                    }
                } else {
                    console.error('获取视频列表失败');
                }
            })
            .catch(error => console.error('获取视频列表时出错:', error));
    }

    function refreshPage() {
        setTimeout(function() {
            location.reload();
        }, 5 * 60 * 1000);
    }

    waitForVideoPlayer();

    refreshPage();
})();