import styled from "@emotion/styled";

import Icon from "metabase/components/Icon";

import { color } from "metabase/lib/colors";

export const HEADER_ICON_SIZE = 16;

export const DashCardActionButtonsContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${color("text-medium")};
  line-height: 1px;
  gap: 0.5rem;
`;

export const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;

  &:hover {
    color: ${color("text-dark")};
  }
`;

export const ActionIcon = styled(Icon)``;

ActionIcon.defaultProps = {
  size: HEADER_ICON_SIZE,
};

export const AddSeriesPlusIcon = styled(ActionIcon)`
  top: 0;
  left: 1;
`;
