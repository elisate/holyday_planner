import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Contactapi() {
  const { data: Messages, isLoading: messageLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await axios.get(
        "https://holiday-planner-4lnj.onrender.com/api/v1/contact/"
      );
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div>




    </div>
  )
}

export default Contactapi