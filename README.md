# prototype-template Read me

Basic template for design prototypes. Based on [Medium: Archetyping: Prototyping for Pros, Part 1](https://blog.prototypr.io/archetyping-prototyping-for-pros-part-1-8e93b273c400#.cj2ql5pgq).

To get setup, open Terminal, and install the command line dev tools (smaller than installing all of XCode from the app store). This might still take a while.

```
xcode-select --install
```

Then install Homebrew.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then install Node.js & npm both with the following command.

```
brew install node
```

Next you need to clone this repo, so come back to this page, and click the green 'Clone or download' button, and make sure you're `Cloning with SSH`. If you have issues here, let me know. I usually clone this repository into a folder called `github` in the root (your user folder).

Next navigate to the folder in terminal with `cd ~/github/this-repo`.

Type `npm install`, and the let npm install the dependencies listed in `package.json`.

Type `gulp` to start the server, and view locally at `localhost:3000`.

---

When building transitions & animations, use transforms & opacity for the smoothest animations.
- [Smooth CSS Animations](https://blog.gyrosco.pe/smooth-css-animations-7d8ffc2c1d29#.szxo6niju)
- [UI Element Samples by Google Chrome](https://googlechrome.github.io/ui-element-samples/)

For more advanced animations (originating in Framer.js for example);
- [Velocity.js](http://velocityjs.org/)

If you find yourself needing to set/manage states, read this: [React.js Introduction For People Who Know Just Enough jQuery To Get By](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/), and for further reading, check these out:
- [react-howto by Pete Hunt](https://github.com/petehunt/react-howto)
- [Learn Javascript by Eric Elliott](https://medium.com/javascript-scene/learn-javascript-b631a4af11f2#.9mbpr0oiu)
