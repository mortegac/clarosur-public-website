import { PrismicRichText } from "@prismicio/react";
import { Content, Description, Title, VideoWrapper, Wrapper } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param { AboutProps }
 */
const About = ({ slice }) => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <PrismicRichText field={slice.primary.title} />
        </Title>

        {slice.primary.description && (
          <Description>
            <PrismicRichText field={slice.primary.description} />
          </Description>
        )}

        {slice.primary.video?.html && (
          <VideoWrapper
            dangerouslySetInnerHTML={{ __html: slice.primary.video.html }}
          />
        )}
      </Content>
    </Wrapper>
  );
};

export default About;
