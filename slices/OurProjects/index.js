import { PrismicRichText } from "@prismicio/react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Project, ProjectDescription, Section, Title } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.OurProjectsSlice} OurProjectsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurProjectsSlice>} OurProjectsProps
 * @param { OurProjectsProps }
 */
const OurProjects = ({ slice }) => (
  <Section>
    <Title>
      {slice.primary.title && (
        <>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.description} />
        </>
      )}
    </Title>

    {slice?.items?.map((item, i) => (
      <Project key={i}>
        <ProjectDescription>
          <PrismicRichText field={item.projectdescription} />
        </ProjectDescription>

        {item?.before?.url && item?.after?.url ? (
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={item.before.url}
                alt={item.before.alt || "Before image"}
                style={{ borderRadius: "5px" }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={item.after.url}
                alt={item.after.alt || "After image"}
                style={{ borderRadius: "5px" }}
              />
            }
            position={50}
            handle={
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  border: "2px solid #000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "ew-resize",
                  boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                }}
              >
                <span style={{ color: "#000", fontWeight: "bold" }}>⇆</span>
              </div>
            }
          />
        ) : (
          <p style={{ color: "red" }}>
            Missing before/after images for this project
          </p>
        )}
      </Project>
    ))}
  </Section>
);

export default OurProjects;
