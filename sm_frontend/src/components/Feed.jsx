import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then(() => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (!pins?.lenght) return <h2>No pins available</h2>;

  if (loading)
    return <Spinner message="We are adding new ideas on your feed" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
