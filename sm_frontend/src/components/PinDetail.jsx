import React, { useState, useEffect } from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { link, useParams } from "react-router-dom";
import { uuidv4 } from "uuid";

import { client, urlFor } from "../client";
import MassonryLayout from "./MosonryLayout";
import { PinDetailMorePinQuery, pinDetailQuery } from "../utils/data";
import Spinner from "./Spinner";

const PinDetail = (user) => {
  const [pins, setPins] = useState(null);
  const [pinDetails, setPinDetails] = useState(null);
  useState[(comment, setComment)] = useState("");
  const [addingComment, setAddingComent] = useState(false);
  const { pinId } = useParams();

  return <div>PinDetail</div>;
};

export default PinDetail;
