import React from "react";
import styled from "styled-components";

const VideoResponsive = styled.div`

    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const YoutubeEmbed = ({ videoLink }) => (
    <VideoResponsive>
        <iframe width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </VideoResponsive>
);

export default YoutubeEmbed;