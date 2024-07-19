# kirkrader.com

mdbook sources for a personal web page

## Install

* [Install Rust](https://www.rust-lang.org/tools/install)
* [Install mdbook](https://rust-lang.github.io/mdBook/guide/installation.html)
* [Install mdbook-mermaid](https://lib.rs/crates/mdbook-mermaid)

## Test

```bash
mdbook clean ; mdbook serve --open
```

## Deploy

```bash
./zipbook
```

...then unzip `./book.zip` in the web server's root directory
