<div align="center">
	<img src="https://logsnag.com/og-image.png" alt="LogSnag"/>
	<br>
    <h1>LogSnag</h1>
	<p>Get notifications and track your project events.</p>
	<a href="https://www.npmjs.com/package/logsnag"><img src="https://img.shields.io/npm/v/logsnag" alt="NPM Version"></a>
	<a href="https://discord.gg/dY3pRxgWua"><img src="https://img.shields.io/discord/922560704454750245?color=%237289DA&label=Discord" alt="Discord"></a>
	<a href="https://docs.logsnag.com"><img src="https://img.shields.io/badge/Docs-LogSnag" alt="Documentation"></a>
	<br>
	<br>
</div>


## Installation

```sh
npm install --save logsnag
```

## Usage

### Import Library

```js
import { LogSnag } from 'logsnag';
```

### Initialize Client

```js
const logsnag = new LogSnag({ 
  token: '7f568d735724351757637b1dbf108e5',
  project: 'my-saas'
});
```

### Track Event

```js
logsnag.track({
    channel: "waitlist",
    event: "User Joined",
    icon: "🎉",
    user_id: "user_123",
    tags: {
      source: "google",
    },
    notify: true
})
```

### User Properties

```js
logsnag.identify({
    user_id: "user_123",
    properties: {
      name: "John Doe",
      email: "john@doe.com",
      plan: "premium",
    }
})
```

### Track Insight

```js
logsnag.insight.track({
    title: "User Count",
    value: "100",
    icon: "👨",
})
```

### Increment Insight

```js
logsnag.insight.increment({
    title: "User Count",
    value: 1,
    icon: "👨",
})
```
