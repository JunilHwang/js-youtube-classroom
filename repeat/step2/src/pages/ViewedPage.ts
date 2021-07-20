import {useState} from "~@core";

import {lectureVideoService} from "~services";
import {Movies, NotFoundMovies} from "~components";

export const ViewedPage = () => {
  const [lectureVideos] = useState(lectureVideoService.fetchLectureVideos());
  const videos = lectureVideos.filter(v => v.viewed);

  if (videos.length === 0) {
    return NotFoundMovies({
      text: "본 영상이 없습니다."
    });
  }

  return Movies({ videos });
}
