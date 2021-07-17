import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const CommunicatingWithProps = () => {
  return (
    <>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Rithu"
          timeAgo="Today at 4:45PM"
          content="I like the subject"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Adithya"
          timeAgo="Today at 4:45PM"
          content="I like the subject"
        />
      </ApprovalCard>{' '}
      <ApprovalCard>
        <CommentDetail
          author="Sankar"
          timeAgo="Today at 4:45PM"
          content="I like the subject"
        />
      </  ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </>
  );
};

export default CommunicatingWithProps;
