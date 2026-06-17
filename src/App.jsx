import { useState } from "react";
import "./App.css";
import MobilePreview from "./components/MobilePreview";
import ContentPanel from "./components/ContentPanel";
import StylingPanel from "./components/StylingPanel";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [campaign, setCampaign] = useState({
    initialPage: {
      title: "How was your experience?",
      subtitle: "We value your feedback",
    },

    feedbackPage: {
      options: ["Excellent", "Good", "Average"],
      additionalComment: true,
      submitText: "Submit",
    },

    thankYouPage: {
    image: "",
    title: "Thank You!",
    subtitle: "Your feedback matters",
    buttonText: "Done",
    },

    styling: {
  backgroundColor: "#ffffff",
  titleColor: "#000000",
  subtitleColor: "#666666",
  buttonColor: "#4f46e5",
  buttonTextColor: "#ffffff",

  fontSize: 16,
  fontWeight: 500,
  borderRadius: 8,
  buttonWidth: 200,
  buttonHeight: 45,

  selectedRatingColor: "#FFD700",
  unselectedRatingColor: "#CCCCCC",
},
  });
  
  const [activeTab, setActiveTab] = useState("content");
  const [rating, setRating] = useState(0);
  const [previewPage, setPreviewPage] = useState("feedback");
  return (
  <div className="app">

    <div className="left">

  <div className="tabs">

    <button
      onClick={() => setActiveTab("content")}
    >
      Content
    </button>

    <button
      onClick={() => setActiveTab("styling")}
    >
      Styling
    </button>
  </div>
  

  {
    activeTab === "content"
      ? <ContentPanel campaign={campaign} setCampaign={setCampaign}/>
      : <StylingPanel campaign={campaign} setCampaign={setCampaign}/>
  }

  {/* <button
  style={{ marginRight: "10px" }}
  onClick={() => setPreviewPage("initial")}
>
  Initial
</button>

<button
  style={{ marginRight: "10px" }}
  onClick={() => setPreviewPage("feedback")}
>
  Feedback
</button>

<button
  onClick={() => setPreviewPage("thankyou")}
>
  Thank You
</button> */}

</div>

    <div className="right">

  <div style={{
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  }}>
    <button onClick={() => setPreviewPage("initial")}>
      Initial
    </button>

    <button onClick={() => setPreviewPage("feedback")}>
      Feedback
    </button>

    <button onClick={() => setPreviewPage("thankyou")}>
      Thank You
    </button>
  </div>

  <MobilePreview
  campaign={campaign}
  rating={rating}
  setRating={setRating}
  previewPage={previewPage}
  setPreviewPage={setPreviewPage}
/>

</div>
  

    <Analytics />
  </div>
);
}

export default App;