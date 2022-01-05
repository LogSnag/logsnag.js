<div align="center">
	<img src="https://logsnag.com/og-image.png" alt="LogSnag"/>
	<br>
    <h1>LogSnag</h1>
	<p>Get notifications and track your project events.</p>
	<a href="https://www.npmjs.com/package/logsnag"><img src="https://img.shields.io/npm/v/logsnag" alt="NPM Version"></a>
	<a href="https://discord.gg/dY3pRxgWua"><img src="https://img.shields.io/discord/922560704454750245?color=%237289DA&label=Discord" alt="Discord"></a>
	<br>
	<br>
</div>


## Installation

```sh
npm install logsnag
```

## Usage

### Import Library

```js
import LogSnag from 'logsnag';
```

### Initialize Client

```js
const logsnag = new LogSnag('7f568d735724351757637b1dbf108e5')
```

### Publish Event

```js
await logsnag.publish({
    project: "my-saas",
    channel: "waitlist",
    event: "User Joined"
})
```

