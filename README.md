# tonebase Technical Interview - FullStack (Front-End Focus)

Welcome to the tonebase Technical Interview! Congratulations, if you're here it means we think you'd make a great addition to the team, based on your past experience, personality and kick-ass skills!

This interview is a small/short test of those skills. Ideally the questions presented and the challenges involved should take no more than 1 hour for an experienced full-stack developer with React chops.

The initial portion of this interview is simply answering a few technical, front-end and React based questions. We can talk through these on a call as I'd love to hear how you think about them/through them!

#### Types of Questions

This interview has been created for someone who considers themselves a full-stack developer with a focus on the front-end. Very concretely what we mean by this is you feel comfortable spinning up an express server and handling MVC based routes, controlles and middleware... but you really feel at home diving into some React or Vue code and ironing out cross-browser bugs and optimizing SCSS patterns. Or you feel comfortable everywhere, which is even better :)

#### Our Stack

The questions below are informed by our stack. I will list the details of each below:

- Client
  - NextJS => Server Side React ([Github Link](https://github.com/zeit/next.js)) + MadeByWild Boilerplate ([Github Link](https://github.com/madebywild/wild-next))
  - Firebase Authentication ([Documentation](https://firebase.google.com/docs/auth))
  - React-Easy State Stores ([Github Link](https://github.com/solkimicreb/react-easy-state))
  - Segment Analytics
- Server/API
  - NodeJS/Express (custom, no off the shelf management system like SAILS)
    - Segment Analytics
- Database
  - Firebase Realtime Database (current)
  - MongoDB (future)
- Payment Processing
  - Chargebee (Subscription Management)
  - Stripe (Payment Processing)
- Marketing Technology
  - Intercom (soon to be removed)
  - FullStory
  - Attribution App
  - HelpScout
  - Customer.io
  - Amplitude
  - Google Analytics
  - SendGrid
  - Google Optimize (A/B, Multivariate)
  - Some others...
- Other
  - Vimeo (Video Hosting)
  - Figma (Design)
  - Canva (Design)
  - Premier (Video Editing) \* GIMP (Image Manipulation)

---

Okay, with all that out of the way let's dive into the question section!

### 1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

What made me most interested in choosing React as a framework started with discovering the preferential capabilities from a development perspective with the tool that is React. Upon getting familiar with the development world I realized that so many companies utilize react as their main library for building full scale applications and knowing the experience I have had as a user on some of these examples immediately attracted me to the possibilities of React based development. It was a choice I made based on the options laid out for me by my orignial mentor in the space, albeit a filtered choice, but one that I am really glad that i decided to pursue.

One thing I enjoy most about React, as compared to Angular for example, is the simplicity of the set up process within React, and the straightforward nature of building components within the react environment. If I had to specify one thing I dislike is the high paced change in the development environment set up, leading to inconsistency when looking for answers in documentation online.

### 2. Why do the component names in JSX start with capital letters?

The component names in JSX start with capital letters because it helps specify that it is actually a react component. Only HTML and SVG tags can begin with a lowercase letter.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

The two main types of components you can render in React are Class Based Components and Functional components. From prior knowledge, class based components were preferential for situations in which state management is being applied to a component, and to follow OOP based programming. After React hooks were introduced for functional components, this has made functional components generally the preferred version, based on the simplicity of code syntax and easier to implement tools.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I have had exposure to testing frameworks in a project introduced to me through one of my current mentors. I haven't personally written testing into projects before, but look forward to learning and applying the skill into tonebase.

---

Whew, okay, now moving into a couple of code questions. We don't need you to code anything just yet, but this is more around optimization and undertstanding JS/React.

### 1. What is wrong with this example, and how would you go about fixing or improving the component?

The issue with this component is that it is a stateful component that should have a specific name referenced in the this.state declaration. 

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'Anonymous'
    }
  }
  render() {
    return (
      <p>Hello {this.state.name}</p>
    );
  }
}
```

### 2. What's the issue with this component. Why? How would you go about fixing it?

The issue with this component is that the syntax is missing constructor(props), super(props), as well as setting the initial state to 'this.state'

```
class App extends React.Component {
state = { search: '' }
handleChange = event => {
/**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can
     * delay the call 250ms after the user has stoped typing.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      })
    }, 250);
  }
render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
  }
}
```

---

Onto just a teensy bit of code + introducing you to our system! This part can be done on your own, and you can ping me when it's good to go!

Here is a link to a Github repo. containing our NextJS setup. It includes everything already setup for you -- SCSS support, a blank canvas for you to play with, and all the boileplate out of the way.

[The Github Repo.](https://github.com/tonebase/tonebase-interviews-fs-fe)

**Your challenge is to implement ONE of the following:**

1. OPTION 1: Implement a simple counter

For this assignment you may use a state management system of your choice (other than the native React state). We recommend `react-easy-state` as that is our default tool and is extremely simple to get up and running.

The counter should:

(a) Increment UP once per hour between 9AM and 5PM (inclusive)

(b) Increment DOWN once per hour between 6PM and 8AM (inclusive)

(c) Increment UP when a button is clicked manually

(d) Increment DOWN when a different button is clicked manually

2. OPTION 2: Build the Google homepage (www.google.com)

Open-ended, go into as much or as little detail as makes sense to you. Responsiveness, functionality, modularity, etc. is all up to you -- we want to know how you interpret this prompt. Feel free to get as creative or keep it as simple as you would like. Your code will be evaluated along the following criteria:

- Functionality
- Creativity
- Readability
- Cleanliness
- Comments
- Modularity
- Defensiveness
- Declarative-ness

**When Complete**

When you're good to go with your implementation and/or happy with it feel free to make a P.R. into this repo. under a new branch titled `${ YOUR_NAME--FullStack--FrontEnd }`

---

Lastly, just a bit of writing! We are a company where members of the team are constantly shifting around/traveling, whether to China to manage our upcoming subsidiary there, or to New York and Europe to head productions, attend events, etc.

Thus writing, and the ability to write clearly, logically and to formulate arguments and answers is crucial at tonebase, whether a developer, PM, or A&R manager! These questions aim to give us a better understanding of you as a writer, as well as your development skills.

### 1. Tell me about componentWillMount and the issues with it?

componentWillMount is a class based lifecycle method that is mainly used to update the state value before the component is rendered to the DOM. There are a few main issues with componentWillMount. One of these includes how the React component doesn’t wait until the componentWillMount is finished before rendering the UI. Although you can start fetching data before the component gets rendered, the response will most likely be returned after the component is rendered to the screen. Also, The componentWillMount method is the only function called on server rendering, and this method also gets called on the client-side. This means that the method will cause performance issues when you need to do server-side rendering.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

A component’s lifecycle is classified into four parts including initialization, mounting, updating, and unmounting. The functions are called in the order of intilization with the constructor function, followed by componentWillMount, componentDidMount, then updating with shouldComponentUpdate, componentWillUpdate, and ComponentDidUpdate. The final function called is componentWillUnmount. 

I would place a request for an api after the componentDidMount portion of the process. This is because at this point the component has mounted on the DOM. 


### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

If I had unlimited time/budget I would spend that time rebuilding my last personally completed app in typescript. After realizing the benefits of building projects using typescript, I realized how much my previously built projects that didn't include typescript could be improved with using it as the base language.

---

That's it! Now it's your time -- feel free to ask any questions you may have and we'd love to answer to the best of our abilities. Thank you so much for taking the time to do this quick interview - we can't wait to see your answers and see if there's a way for us to work together!

At tonebase we truly believe in the following principles:

1. To Educate & Inspire In Everything We Do
1. Think Big, Then Think Bigger
1. Align Around The Mission, Execute Against The Vision
1. Start And End With The Customer
1. Culture Doesn't Just Happen, It's Crafted

We'll let you know very soon if you've moved into the next phase of the interview. In the next step we will introduce you to the founders, our mission + vision, core company values and to our small, close-knit and wonderful team. We're all excited to see where things go and will be in touch ASAP.

If there's anything else or you need to get ahold of the team at any time, you can reach out to [<team@tonebase.co>](mailto:team@tonebase.co) or reach Abhi, co-founder and Head of Product at [<abhi@tonebase.co>](mailto:abhi@tonebase.co)
