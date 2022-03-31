import styled from 'styled-components';

export const Info = styled.div`
  grid-area: info;
  background-color: white;
  padding: 4rem;

  h2 {
    font-size: var(--header2);
    text-transform: uppercase;
    color: var(--green);
    font-weight: bold;
  }

  div {
    margin-top: 4rem;
  }
`

export const Images = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .verticalImg {
    height: 30vh;
    width: auto;
  }

  .horizontalImg {
    width: 40%;
    height: auto;
  }
`