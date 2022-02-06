import styled from "styled-components";

// ------------------------------------------------

export const NotFoundViewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  .notfound_img {
    position: relative;
    ::after {
      content: "";
      z-index: -1;
      position: absolute;
      left: -50px;
      top: -50px;
      width: 240px;
      height: 240px;
      background-color: #f2f5f8;
      border-radius: 50%;
    }
  }
`;
export const LinkItemWrapper = styled.div`
  font-weight: 600;
  color: #388dbc;
  cursor: pointer;
  :hover {
    color: #e02828;
  }
`;
