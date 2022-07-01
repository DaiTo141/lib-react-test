import React, { useEffect } from 'react';
import _ from 'lodash'
const Convert = (props) => {
  useEffect(() => {
    let x = _.compact(props.array)
    props.callB(x)
  }, [props.array])
  return (
    <></>
  )
}
export default Convert;