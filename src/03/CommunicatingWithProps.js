import React from 'react';

import CommentDetail from './CommentDetail';

const CommunicatingWithProps = () => {
  return (
    <>
      <CommentDetail author="Rithu" timeAgo="Today at 4:45PM"  content="I like the subject" />
      <CommentDetail author="Adithya" timeAgo="Today at 4:45PM"  content="I like the subject" />
      <CommentDetail
        author="Sankar"
        timeAgo="Today at 4:45PM"
        content="I like the subject"
      />
    </>
  );
};

export default CommunicatingWithProps;
