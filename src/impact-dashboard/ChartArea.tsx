import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { MarkColors as markColors } from "../design-system/Colors";
import CurveChart from "./CurveChartContainer";
import CurveChartLegend from "./CurveChartLegend";

export type MarkColors = {
  exposed: string;
  infectious: string;
  fatalities: string;
  hospitalized: string;
  hospitalBeds: string;
};

const Container = styled.div``;

const LegendAndActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const LegendContainer = styled.div`
  flex: 0 0 auto;
`;

const ChartArea: React.FC = () => {
  const [groupStatus, setGroupStatus] = useState({
    exposed: true,
    fatalities: true,
    hospitalized: true,
    infectious: true,
  });

  const toggleGroup = (groupName: keyof typeof groupStatus) => {
    setGroupStatus({ ...groupStatus, [groupName]: !groupStatus[groupName] });
  };

  return (
    <Container>
      <LegendAndActions>
        <LegendContainer>
          <CurveChartLegend
            markColors={markColors}
            toggleGroup={toggleGroup}
            groupStatus={groupStatus}
          />
        </LegendContainer>
      </LegendAndActions>
      <CurveChart markColors={markColors} groupStatus={groupStatus} />
    </Container>
  );
};

export default ChartArea;
