---
sidebar_position: 3
---
# Directory simulator

**Overview** 
That part of the project uses the *thing-directory* repository as a simulator of Directories.

[Linksmart thing-directory original repository](https://github.com/linksmart/thing-directory)


**Github Repository**
[Linksmart thing-directory](https://github.com/vaimee/desmo-dapp/tree/main/linksmart-directory)

# Setup

Note: [WAM](../example-tds/README.md) need to be up.

1. Download and install GO [go.dev](https://go.dev/dl/)
2. Download the original repository `./downloadRepo.sh`
3. Build and run `./buildAndRun.sh`


# Details

In the "./directories" folder there are the configuration files and the stores of some Directories.
In the "./directoryManager" folder there is a node.js application that can be used to manage the TD of all the Directories, it uses the [WAM](../example-tds/README.md) project as a simulator of Directories.


The script `buildAndRun.sh` runs just one Directory, and the script `setup.sh` will set the TDs just for that Directory (WAM needs to be up).
The script `buildAndRunMultiple.sh` runs more than one Directory, and the script `setupMultiple.sh` will set the TDs for all of that Directories (WAM needs to be up).

**directoryManager**

Instead use `setup.sh` or `setupMultiple.sh`:

Using `node directoryManager/setup.js` just one directory will be considered.

Using `node directoryManager/setup.js --m` all the directories will be considered.

Using `node directoryManager/setup.js --m X` all the directories will be considered and "X" is the probability of NOT registering a TD on a Directory.
"X" must be:  `0 < X < 1`.
For example, `node directoryManager/setup.js --m 0.5` will register just half of the TD in each Directory.


