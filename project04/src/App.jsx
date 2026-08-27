import React from 'react'

import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Cloud Solutions Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$74/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$77/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "4 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$79/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$91/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    company: "Intel",
    datePosted: "2 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$59/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "6 weeks ago",
    post: "Platform Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$98/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$64/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    company: "IBM",
    datePosted: "10 weeks ago",
    post: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$71/hr",
    location: "Kolkata, India"
  }
];

console.log(jobOpenings)

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App