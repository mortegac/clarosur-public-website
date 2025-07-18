import { SliceContainer, SectionContainer } from "./";

export const SliceFactory = (
  Slice,
  options = {
    sliceProps: {},
    sliceContainerProps: {},
    sectionContainerProps: {},
  }
) => {
  const { sliceProps, sliceContainerProps, sectionContainerProps } = options;
  const SliceWrapper = props => {
    // Extraer la imagen de fondo de los props del slice
    const bgImageSrc = props?.primary?.image?.url || sectionContainerProps.bgImageSrc;
    
    return (
      <SectionContainer 
        {...sectionContainerProps} 
        // bgImage={!!bgImageSrc}
        // bgImageSrc={bgImageSrc}
      >
        <SliceContainer {...sliceContainerProps}>
          <Slice {...props} {...sliceProps} />
        </SliceContainer>
      </SectionContainer>
    );
  };
  return SliceWrapper;
};
