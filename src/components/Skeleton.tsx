type props = {
   rows: number;
};

const Skeleton = ({ rows }: props) => {
   return (
      <div className="card skeleton">
         <div>
            <img alt="" className="avatar" />
         </div>
         <div className="user-info">
            <h2></h2>
            {[...Array(rows)].map((_value) => {
               return <p></p>;
            })}
         </div>
      </div>
   );
};
export default Skeleton;
