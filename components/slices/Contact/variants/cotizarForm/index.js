import React, { useState, useEffect, useMemo, useRef, useReducer } from "react";

import Link from "next/link";

import { SliceFactory } from "../../../../common/Containers";

export const Base = (slice) => {


  return (
    <>

      <PageContainer bgColor={"white"}>
        <SectionContainer>
          <Container >
           
          </Container>
        </SectionContainer>
      </PageContainer>
    </>
  );
}


export const CotizarForm = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#F4F4F4",
    }
  }
});
