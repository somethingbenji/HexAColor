# HexAColor 

## What is it?

HexAColor is a encryption method that encodes data using hex-color codes.  
It was made for fun — **This should not be used to protect sensitive data**.

For demonstration / testing, the provided example uses the hex color `FFFF00` (basic yellow).  

---

## How it works

- The core idea: treat color codes (hex-color strings) as “keys” for encryption and decryption.  
- The repository contains an HTML + JavaScript implementation:  
  - `Index.html`: a simple UI so you can enter data and a hex color “key”, then encrypt or decrypt.  
  - `Script.js`: JavaScript code that performs the encryption / decryption logic.  

When you supply the hex color (key) — preferably without the leading `#` — the script uses it to transform your input (e.g. arguments or data) into an “encrypted” form, and can reverse it (decrypt) if the correct key is provided.  

Because the “key” is a hex-color (i.e. a string of hex digits), it’s easy to pass around or embed (e.g. as part of args), but without the key the data becomes harder to recover (though — again — this is not cryptographically secure).  

---

## Use HAC yourself

Here’s how to use HexAColor in practice:

1. Open `Index.html` in your browser (or run via a live-server).  
2. In the “Hex color” input field, enter your key (e.g. `FFFF00`).  
3. In the data input (or “text to encrypt / decrypt” field), enter the text you want to encrypt or decrypt.  
4. Click **Encrypt** to encode the text with the given key; or **Decrypt** to reverse using the same key.  

### Example

- **Key (hex color):** `FFFF00`  
- **Plaintext:** `Hello, World!`  
- **Encrypted output:** `ff48ff65ff6cff6cff6fff2cff20ff57ff6fff72ff6cff64ff21`  
- **Decrypting with the same key (`FFFF00`) returns:** `Hello, World!`  

_(Note: the actual algorithm is in 'Script.js' ;) )_

(pd: I believe you can actually guess the code by just the string, remember to not use it for serious stuff!)

---

## Usage for you!

If you want to use the code yourself (or integrate into other projects) you can!
Just remember:

* Save 'Script.js'
* Provide an HTML so you're able to click stuff
* Use same ID'S or if you're gonna use different, change them in the file.

i don't really know if i should ask for credit, but if you want to, that would be great! :3

---

## Where / how to run it

HexAColor runs entirely in the browser — no server setup or build steps needed. Just open `Index.html` in any modern browser (Chrome, Firefox, etc.), or serve via a static live-server if you prefer.  :P

---

## Disclaimer 

This project was made just for fun. The hex color based encryption (i repeat) should **NOT** br used to protect **ANY** data at all.

If you have feedback — ideas, improvements, or found bugs — feel free to open an issue or submit a pull request!
