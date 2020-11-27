import React from 'react'
import { useRouter } from 'next/router';

const PortfolioDetail = () => {
  const router = useRouter();
  // router.query.(nameOfFile)
  //const id = router.query.id;
  // or destructure the id (nameOfFile) from the router.query (see below)
  const { id } = router.query;

  return (
    <>
      <h1>Portfolio Detail Page with ID: {id}</h1>
    </>
  )
}

// const PortfolioDetail = ({query}) => {
//   //const router = useRouter();
//   // router.query.(nameOfFile)
//   //const id = router.query.id;
//   // or destructure the id (nameOfFile) from the router.query (see below)
//   const { id } = query;

//   return (
//     <>
//       <h1>Portfolio Detail Page with ID: {id}</h1>
//     </>
//   )
// }

// PortfolioDetail.getInitialProps = ({query}) => {
//   return (
//     {query}
//   )
// }

// same as above written as a ClassComponent
// class PortfolioDetail extends React.Component {
//   // getInitialProps is called on the server
//   static getInitialProps({query}) {
//     // what is returned is available in this.props
//     return (
//       {query, test: 'Hello World', num: 4+4}
//     )
//   }

//   render() {
//     //const id = this.props.query.id;
//     const { id } = this.props.query;
//     return (
//     <>
//       <h1>Portfolio Detail Page with ID: {id}</h1>
//       <h1>{this.props.test}</h1>
//       <h1>{this.props.num}</h1>
//     </>
//     )
//   }
// }

export default PortfolioDetail;
