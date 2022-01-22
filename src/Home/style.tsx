import styled from 'styled-components/native';


export const TitleContainer = styled.View`
    align-items: center;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #F7FFF7;

`;
export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #1A535C;
`
export const InputWrapper = styled(TitleContainer)`
    background-color: #FFFFFF;
`
export const Input = styled.TextInput`
    border: 2px solid #000000;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    font-size: 20px;
    width: 300px;
`
export const LyricsContainer = styled(TitleContainer)`
    background-color: #F7FFF7;
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 10px;
`
export const Text = styled.Text`
    font-size: 18px;
`
export const SubtitleContainer = styled(TitleContainer)`
    align-items: center;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #F7FFF7;
    border: 2px solid
`
export const TextSubtitle = styled(Text)`
    font-size: 18px;
    font-weight: bold;
`
export const LoadView = styled.View`
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 500px;
`
