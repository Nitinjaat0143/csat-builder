function ContentPanel({ campaign, setCampaign }) {
  return (
    <div>

      <h2>Content Settings</h2>

      <label>Title  - </label>

      <input
        type="text"
        value={campaign.initialPage.title}
        onChange={(e) =>
          setCampaign({
            ...campaign,
            initialPage: {
              ...campaign.initialPage,
              title: e.target.value,
            },
          })
        }
      />
        <br /><br />
        <h3>Options</h3>

        {
  campaign.feedbackPage.options.map((option, index) => (
    <div key={index}>

      <input
        type="text"
        value={option}
        onChange={(e) => {

          const updatedOptions = [
            ...campaign.feedbackPage.options
          ];

          updatedOptions[index] = e.target.value;

          setCampaign({
              ...campaign,
              feedbackPage: {
                  ...campaign.feedbackPage,
                  options: updatedOptions
            }
          });

        }}
      />
                  <button
                    onClick={() => {
                  
                      const updatedOptions =
                        campaign.feedbackPage.options.filter(
                          (_, i) => i !== index
                        );
                  
                      setCampaign({
                        ...campaign,
                        feedbackPage: {
                          ...campaign.feedbackPage,
                          options: updatedOptions
                        }
                      });
                  
                    }}
                  >
                    Delete
                  </button>

    </div>
  ))
}
<button
  onClick={() => {

    setCampaign({
      ...campaign,
      feedbackPage: {
        ...campaign.feedbackPage,
        options: [
          ...campaign.feedbackPage.options,
          ""
        ]
      }
    });

  }}
>
  Add Option
</button>

<h3>Additional Comment</h3>

<label>
  <input
    type="checkbox"
    checked={campaign.feedbackPage.additionalComment}
    onChange={(e) =>
      setCampaign({
        ...campaign,
        feedbackPage: {
          ...campaign.feedbackPage,
          additionalComment: e.target.checked,
        },
      })
    }
  />

  Enable Comment Box
</label>

<h3>Submit Button Text</h3>

<input
  type="text"
  value={campaign.feedbackPage.submitText}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      feedbackPage: {
        ...campaign.feedbackPage,
        submitText: e.target.value,
      },
    })
  }
/>

<h2>Thank You Page</h2>

<input
  type="text"
  placeholder="Thank You Title"
  value={campaign.thankYouPage.title}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      thankYouPage: {
        ...campaign.thankYouPage,
        title: e.target.value
      }
    })
  }
/>

    <input
  type="text"
  placeholder="Thank You Subtitle"
  value={campaign.thankYouPage.subtitle}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      thankYouPage: {
        ...campaign.thankYouPage,
        subtitle: e.target.value
      }
    })
  }
/>

  <input
  type="text"
  placeholder="Button Text"
  value={campaign.thankYouPage.buttonText}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      thankYouPage: {
        ...campaign.thankYouPage,
        buttonText: e.target.value
      }
    })
  }
/>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {

    const file = e.target.files[0];

    if(file){

      const imageUrl =
        URL.createObjectURL(file);

      setCampaign({
        ...campaign,
        thankYouPage: {
          ...campaign.thankYouPage,
          image: imageUrl
        }
      });

    }

  }}
/>


    </div>
  );
}

export default ContentPanel;