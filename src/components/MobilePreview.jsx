function MobilePreview({
  campaign,
  rating,
  setRating,
  previewPage,
  setPreviewPage
}) {

  const style = campaign.styling;

  return (
    <div
      className="phone"
      style={{
        background: style.backgroundColor
      }}
    >

      {/* INITIAL PAGE */}

      {previewPage === "initial" && (
        <>
          <h2
            style={{
              color: style.titleColor,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight
            }}
          >
            {/* {campaign.initialPage.title} */}
            How was your experience?
          </h2>

          <p
            style={{
              color: style.subtitleColor
            }}
          >
            {/* {campaign.initialPage.subtitle} */}
            Tell us what worked well and where we can do better.
          </p>

            <button
              style={{
              background: style.buttonColor,
              color: style.buttonTextColor,
              width: style.buttonWidth,
              height: style.buttonHeight,
              borderRadius: `${style.borderRadius}px`,
              border: "none",
              cursor: "pointer"
              }}
            onClick={() => setPreviewPage("feedback")}
            >
            Next
            </button>
          
        </>
      )}

        {/* Checking font size:
         <p style={{ fontSize: `${style.fontSize}px` }}>
          TEST FONT SIZE
         </p> */}

      {/* FEEDBACK PAGE */}

      {previewPage === "feedback" && (
        <>

          <h2
            style={{
              color: style.titleColor,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight
            }}
          >
            {campaign.initialPage.title}
          </h2>

          <p
            style={{
              color: style.subtitleColor
            }}
          >
            {campaign.initialPage.subtitle}
          </p>

          <div style={{ margin: "20px 0" }}>

            {[1, 2, 3, 4, 5].map((star) => (

              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  cursor: "pointer",
                  fontSize: "30px",
                  marginRight: "5px",
                  color:
                    star <= rating
                      ? style.selectedRatingColor
                      : style.unselectedRatingColor
                }}
              >
                ★
              </span>

            ))}

          </div>

          <div>

            {campaign.feedbackPage.options.map(
              (option, index) => (
                <div
                  key={index}
                  style={{
                    padding: "8px",
                    marginBottom: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                  }}
                >
                  {option}
                </div>
              )
            )}

          </div>

          {campaign.feedbackPage.additionalComment && (
            <textarea
              placeholder="Write your feedback..."
              rows="4"
              style={{
                width: "100%",
                marginTop: "15px",
                marginBottom: "15px"
              }}
            />
          )}

          <button
            style={{
              background: style.buttonColor,
              color: style.buttonTextColor,
              width: style.buttonWidth,
              height: style.buttonHeight,
              borderRadius: style.borderRadius,
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => setPreviewPage("thankyou")}
          >
            {campaign.feedbackPage.submitText}
          </button>

        </>
      )}

      {/* THANK YOU PAGE */}

      {previewPage === "thankyou" && (
        <>

          {campaign.thankYouPage.image && (
            <img
              src={campaign.thankYouPage.image}
              alt="thank you"
              style={{
                width: "120px",
                display: "block",
                margin: "0 auto 20px"
              }}
            />
          )}

          <h2
            style={{
              color: style.titleColor,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight
            }}
          >
            {campaign.thankYouPage.title}
          </h2>

          <p
            style={{
              color: style.subtitleColor
            }}
          >
            {campaign.thankYouPage.subtitle}
          </p>

          <button
            style={{
              background: style.buttonColor,
              color: style.buttonTextColor,
              width: style.buttonWidth,
              height: style.buttonHeight,
              borderRadius: style.borderRadius,
              border: "none",
              cursor: "pointer"
            }}
          >
            {campaign.thankYouPage.buttonText}
          </button>

        </>
      )}

    </div>
  );
}

export default MobilePreview;