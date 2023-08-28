import { createBrowserRouter } from "react-router-dom";
import Review from "../components/Review.tsx";
import ErrorPage from "../error.page.tsx";
import ExpandableImage from "../components/ExpandableImage.tsx";
import GithubProfile from "../components/GithubProfile.tsx";
import App from "../App.tsx";
import DragDrogUpload from "../components/DragDropUpload.tsx";
import LiveSearch from "../components/LiveSearch.tsx";
import DraggableSlider from "../components/DraggableSlider.tsx";
import Payment from "../components/Payment.tsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/reviews",
            element: <Review />,
         },
         {
            path: "/expandable-image",
            element: <ExpandableImage />,
         },
         {
            path: "/github-profile-search",
            element: <GithubProfile />,
         },
         {
            path: "/drag-drop-upload",
            element: <DragDrogUpload />,
         },
         {
            path: "/live-search",
            element: <LiveSearch />,
         },
         {
            path: "/draggable-slider",
            element: <DraggableSlider />,
         },
         {
            path: "/payment",
            element: <Payment />,
         },
      ],
   },
]);

export default router;
