import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    HandleFeedback = (e) => {
        this.setState((prevState) => {
            return {
              [e]: prevState[e] + 1
          }
      })
  }
  
  countTotalFeedback=()=> {
        return this.state.good+this.state.neutral+this.state.bad;
    }
  countPositiveFeedbackPercentage=()=> {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  
  render() {
    return (
      <>
        <Section title = "Pease leave feedback">
          <FeedbackOptions onLeaveFeedback={this.HandleFeedback} options={Object.keys(this.state)} />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics good={this.state.good} bad={this.state.bad} neutral = {this.state.neutral} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )
      } 
    </>
  );
    }
}

