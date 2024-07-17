// const VIDEO_CACHE_KEY = "cachedVideos";

// export const loadDesktopVideos = async () => {
//     const video1 = await import("./../../assets/video/2.mp4");
//     const video2 = await import("./../../assets/video/anime002.mp4");
//     return { video1: video1.default, video2: video2.default };
//   };

//   export const loadMobileVideos = async () => {
//     const video3 = await import("./../../assets/video/aaa.mp4");
//     const video4 = await import("./../../assets/video/new4.mp4");
//     return { video3: video3.default, video4: video4.default };
//   };
// videoLoader.js

const VIDEO_CACHE_KEY = "cachedVideos";

export const loadDesktopVideos = async () => {
  const cachedVideos = JSON.parse(localStorage.getItem(VIDEO_CACHE_KEY)) || {};
  if (cachedVideos.desktop) {
    return cachedVideos.desktop;
  }

  const video1 = await import("./../../assets/video/2.mp4");
  const video2 = await import("./../../assets/video/anime002.mp4");
  const videos = { video1: video1.default, video2: video2.default };
  localStorage.setItem(VIDEO_CACHE_KEY, JSON.stringify({ ...cachedVideos, desktop: videos }));
  return videos;
};

export const loadMobileVideos = async () => {
  const cachedVideos = JSON.parse(localStorage.getItem(VIDEO_CACHE_KEY)) || {};
  if (cachedVideos.mobile) {
    return cachedVideos.mobile;
  }

  const video3 = await import("./../../assets/video/aaa.mp4");
  const video4 = await import("./../../assets/video/new4.mp4");
  const videos = { video3: video3.default, video4: video4.default };
  localStorage.setItem(VIDEO_CACHE_KEY, JSON.stringify({ ...cachedVideos, mobile: videos }));
  return videos;
};
