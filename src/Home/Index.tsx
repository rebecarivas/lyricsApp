import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, ScrollView, Button, Image} from "react-native";
import api from "../services";
import { setLyrics } from "../store/action";
import { TitleContainer, LyricsContainer, Title, InputWrapper, Input, Text, SubtitleContainer, TextSubtitle, LoadView} from "./style";
import Load from '../image/load.gif'


const Home: React.FC = () => {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [isNotLoad, setIsNotLoad] = useState(false);
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state);

    const handleRequestLyrics = () =>{
        setIsLoad(true)
        api.get(artist + '/' + song)
        .then(response => dispatch(setLyrics(response.data.lyrics)))
        .catch(error => console.warn('ocorreu algum erro'))
        .finally(() => {setTimeout(() => {
            setIsLoad(false);
            setIsNotLoad(true);
        }
        , 1500)})       
    };
      if(isLoad){
        return <LoadView><Image source={Load} /></LoadView>
    }


    return (
        <SafeAreaView>
            <TitleContainer>
                <Title>Lyrics App</Title>
            </TitleContainer>
            <InputWrapper>
                <Input 
                    onChangeText={e => setArtist(e.toLowerCase().replace(' ', '-'))}
                    placeholder="Enter a singer or group"
                />
                <Input 
                    onChangeText={e => setSong(e.toLowerCase().replace(' ', '-'))}
                    placeholder="Enter a song"
                />
            </InputWrapper>
            <Button
                title='Request' 
                onPress={handleRequestLyrics}
            />   
            {isNotLoad &&
            <>
                <SubtitleContainer>
                    <TextSubtitle>{artist.toUpperCase().replace('-', ' ')} - {song.toUpperCase().replace('-', ' ')}</TextSubtitle>
                </SubtitleContainer>
                <ScrollView>
                    <LyricsContainer>
                        <Text>{selector}</Text>
                    </LyricsContainer>
                </ScrollView>
            </>
            }

        </SafeAreaView>
    )
}
export default Home;
