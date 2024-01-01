import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  // const s1 = {
  //   "name": "ishan",
  //   "class": "5b",
  // };
  // const [state , setState] = useState(s1);
  // const update = () =>{
  //   setTimeout(() => {
  //       setState({
  //           "name" : "newuser",
  //           "class": "basic"
  //         })
  //   },1000)

  // }
  const notesInitial = [
    {
      "_id": "657737d917ee58e1e2b5dd3b",
      "user": "6576fbfbc4afd1789ff6d152",
      "title": "important updated",
      "description": "dont wake up early",
      "tag": "updated",
      "date": "2023-12-11T16:24:57.758Z",
      "__v": 0
    },
   
    {
      "_id": "657739a245085961c7558ba4",
      "user": "6576fbfbc4afd1789ff6d152",
      "title": "imporatant ",
      "description": "please awake up early",
      "tag": "personaal",
      "date": "2023-12-11T16:32:34.726Z",
      "__v": 0
    },
    {
      "_id": "657737d917ee58e1e2b5dd3b",
      "user": "6576fbfbc4afd1789ff6d152",
      "title": "important updated",
      "description": "dont wake up early",
      "tag": "updated",
      "date": "2023-12-11T16:24:57.758Z",
      "__v": 0
    },
   
    {
      "_id": "657739a245085961c7558ba4",
      "user": "6576fbfbc4afd1789ff6d152",
      "title": "imporatant ",
      "description": "please awake up early",
      "tag": "personaal",
      "date": "2023-12-11T16:32:34.726Z",
      "__v": 0
    },
    {
      "_id": "657737d917ee58e1e2b5dd3b",
      "user": "6576fbfbc4afd1789ff6d152",
      "title": "important updated",
      "description": "dont wake up early",
      "tag": "updated",
      "date": "2023-12-11T16:24:57.758Z",
      "__v": 0
    },
   
    {
      "_id": "657739a245085961c7558ba4",
      "user": "6576fbfbc4afd1789ff6d152",
      "title": "imporatant ",
      "description": "please awake up early",
      "tag": "personaal",
      "date": "2023-12-11T16:32:34.726Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(notesInitial)

  return (
    <noteContext.Provider value={{notes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
