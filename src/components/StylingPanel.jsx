function StylingPanel({ campaign, setCampaign }) {

  return (
    <div>

      <h2>Styling Settings</h2>

      <label>Background Color</label>

      <input
        type="color"
        value={campaign.styling.backgroundColor}
        onChange={(e)=>
          setCampaign({
            ...campaign,
            styling:{
              ...campaign.styling,
              backgroundColor:e.target.value
            }
          })
        }
      />

      <br /><br />

      <label>Title Color</label>
        &nbsp;
      <input
        type="color"
        value={campaign.styling.titleColor}
        onChange={(e)=>
          setCampaign({
            ...campaign,
            styling:{
              ...campaign.styling,
              titleColor:e.target.value
            }
          })
        }
      />
<br/><br />

      <label>Font Size</label>

      <input
       type="range"
       min="12"
       max="40"
       value={campaign.styling.fontSize}
       onChange={(e)=>
       setCampaign({
         ...campaign,
         styling:{
           ...campaign.styling,
           fontSize: Number(e.target.value)
         }
       })
       }
      />
      <p>{campaign.styling.fontSize}px</p>
      
      <label>Button Radius</label>

<input
  type="range"
  min="0"
  max="50"
  value={campaign.styling.borderRadius}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      styling: {
        ...campaign.styling,
        borderRadius: Number(e.target.value)
      }
    })
  }
/>

<p>{campaign.styling.borderRadius}px</p>

<label>Button Width</label>

<input
  type="range"
  min="100"
  max="300"
  value={campaign.styling.buttonWidth}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      styling: {
        ...campaign.styling,
        buttonWidth: Number(e.target.value)
      }
    })
  }
/>

<p>{campaign.styling.buttonWidth}px</p>

<label>Button Height</label>

<input
  type="range"
  min="30"
  max="80"
  value={campaign.styling.buttonHeight}
  onChange={(e) =>
    setCampaign({
      ...campaign,
      styling: {
        ...campaign.styling,
        buttonHeight: Number(e.target.value)
      }
    })
  }
/>

<p>{campaign.styling.buttonHeight}px</p>


    </div>
  )
}

export default StylingPanel;