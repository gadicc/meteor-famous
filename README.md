## gadicohen:famous

Temporary package for Famo.us Mixed Mode v0.5+

I won't be maintaining this package, it's just for people who want to get up
and running with the new mixed mode quickly (including glsl shaders).

I suggest to:

* Use Famous via [raix:famono](https://atmospherejs.com/raix/famono) once https://github.com/Famous/engine/issues/152 is fixed.
* Wait for new version of [mjn:famous](https://atmospherejs.com/mjn/famous)
* Use Famous via [cosmos:browserify](https://atmospherejs.com/cosmos/browserify) once https://github.com/Famous/engine/issues/152 is fixed.
* Use Famous via [rocket:module](https://atmospherejs.com/rocket/module) once https://github.com/Famous/engine/issues/152 is fixed.

## Development / Manual Upgrade

```bash
$ git clone https://github.com/gadicc/meteor-famous.git
$ cd meteor-famous
$ git submodule init
$ git submodule update
# must be global for now (famous < 0.6.2 requires glsify@1.6.0, not v2!)
$ sudo npm install -g glslify
```

Now you can symlink to that directory from any app's packages folder, and Meteor will use that release instead.

If you ever need a specific commit, just go into `meteor-famous/lib/famous` and
`git checkout <commit-sha>`.

Note, when building the package, you'll get some errors about glsify not being
found.  As long as glslify is installed globally, you can safely ignore that.
It's because of the `require('glsify')`, and the glsify compilation stuff
happens elsewhere in the tool chain.  I should just have it not output an error
for glslify, didn't realize so many people were using this :)
