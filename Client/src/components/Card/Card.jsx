import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../redux/actions";
// import { connect } from "react-redux";
import { useDispatch , useSelector } from "react-redux";

const DivCard = styled.div`
  width: 12em;
  height: 18em;
  background-color: #000;
  margin: 0.6em 2.5em;
  border: 2px solid rgb(217, 176, 255);
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 1em 0.25em rgb(217, 176, 255);
  }

  & img {
    margin: -1em 2px 0px 2px;
    border-radius: 50%;
    height: 190px;
    width: 182px;
    object-fit: cover;
    box-shadow: 0px 0px 4px black;
  }
`;
const Button = styled.button`
  background-color: rgb(217, 176, 255);
  border-radius: 3px;
  position: relative;
  left: 4.5em;
  flex-wrap: wrap;
  width: 15px;
  height: 15px;
  align-content: center;
  border: none;
  box-shadow: 0px 0px 2px 1px black;
  color: black;
  padding-bottom: 5px;
  justify-content: center;
  margin-top: 2px;
  &:hover {
    border: none;
    box-shadow: 0 0 0.2em 0.05em rgb(217, 176, 255);
  }
`;
const Name = styled.h2`
  background-color: #dedfdc;
  color: #21618c;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  transition: all 0.5s;

  &:hover {
    color: blue;
  }
`;
const Gender = styled.h2`
  color: ${(props) => (props.mOf === "Male" ? "#43A0EA " : "#EE4EE9 ")};
  font-size: 1.3rem;
  display: inline-block;
  width: 50%;
  padding-top: 5px;
`;
const Specie = styled.h2`
  font-size: 1.3rem;
  width: 50%;
  display: inline-block;
  padding-top: 5px;
  color: white;
`;
const ButtonFav = styled.button`
  position: relative;
  left: -70px;
  border: none;
  margin-top: 5px;
  background-color: black;
`;
const DivDescrip = styled.div`
  margin-bottom: 5%;
`;
const Linkme = styled(Link)`
  text-decoration: none;
`;

export default function Card({
  name,
  id,
  gender,
  species,
  onClose,
  image
}) {
  
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.allCharacters)

  const [isFav, setIsFav] = useState(false);



  
  
  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites,id]);

  const handleFavorite = () => {
  if (isFav) {
    setIsFav(false);
       dispatch(deleteFav(id));
      }
    if (!isFav) {
       setIsFav(true);
       dispatch(addFav({ name, id, gender, species, onClose, image }));
      }
   };
  
  return (
    <DivCard>
      {isFav ? (
        <ButtonFav onClick={handleFavorite}>❤️</ButtonFav>
      ) : (
        <ButtonFav onClick={handleFavorite}>🤍</ButtonFav>
      )}
      
      <Button onClick={() => onClose(id)}>x</Button>)
      
      <Linkme to={`/detail/${id}`}>
        <img src={image} alt="personaje" />
        <Name>{name}</Name>
      </Linkme>

      <DivDescrip>
        <Specie>{species}</Specie>
        <Gender mOf={gender}>{gender}</Gender>
      </DivDescrip>
    </DivCard>
  );
}

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (personaje) => dispatch(addFav(personaje)),
//     deleteFav: (id) => dispatch(deleteFav(id)),
//   };
// };

// export const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
