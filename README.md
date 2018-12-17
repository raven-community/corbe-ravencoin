# corbe-ravencoin

> npm module to convert between Corbe and Ravencoin <b>with lightweight precision</b>.

<br>

<br>

## Install

```bash
npm install --save corbe-ravencoin
```
<br>

## Usage

#### Node.js
```js
var sb = require('corbe-ravencoin');

sb.toCorbe(1);
//=>100000000

sb.toRavencoin(100000000);
//=>1
```

<br>

#### Web

```js
<script src="https://rawgit.com/raven-community/corbe-ravencoin/master/index.bundle.js"></script>
<script>
  console.log('One Corbe equals ' + sb.toRavencoin(1) + ' Ravencoin');
</script>
```

<br>

Or download it with `npm install --save corbe-ravencoin` and reference it as:
```html
<script src="node_modules/corbe-ravencoin/index.bundle.js"></script>
```

<br>

### Error Handling

```javascript
try {
  sb.toCorbe(false)); //Throws TypeError
} catch (err) {
  console.log(err);
}
```

<br>

## API

`sb.toCorbe(number || string)`  
`sb.toRavencoin(number || string)`

[Read more on the Wiki](https://github.com/raven-community/corbe-ravencoin/blob/master/wiki/index.md)

<br>

## FAQ

* What is a Corbe?
	* Corbe is to Ravencoin as pennies are to the dollar. Except that there are 100,000,000 Corbe in one Ravencoin.  


* Why do I need a module when I can just divide or multiply by 100,000,000?
	* [See here](http://repl.it/zlF/4) - Floating point errors are a bitch. So `corbe-ravencoin` uses a bignum library to ensure accurate conversions!

<br>

## Tests

```bash
npm test
```

<br>

## License

MIT ©
