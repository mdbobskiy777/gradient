import styled from 'styled-components';

const GradientDiv = styled.div.attrs(({item}) => ({
    firstColor: item.firstColor,
    secondColor: item.secondColor
}))`
  display: flex;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(${item => item.firstColor}, ${item => item.secondColor});

`

const GradientItem = ({item}) => {
    return (
        <GradientDiv item={item}>
            <div style={{padding: "10px"}}>
                <div>{item.firstColor}</div>
            </div>
            <div style={{padding: "10px"}}>
                <div>{item.secondColor}</div>
            </div>
        </GradientDiv>
    )
}
export default GradientItem