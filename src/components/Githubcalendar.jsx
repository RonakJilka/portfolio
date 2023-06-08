import React from "react";
import { SectionWrapper } from "../hoc";
import GitHubCalendar from 'react-github-calendar';

function Githubcalendar() {
  return (
    <div>
      <GitHubCalendar username="RonakJilka" />
    </div>
  );
}
export default SectionWrapper(Githubcalendar, "");
