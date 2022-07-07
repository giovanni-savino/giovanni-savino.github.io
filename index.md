# Use podman on mac
In order to use contaner on MacOS, a container engines is required to build and run container.
Athe moment MacOS (both x86 and M1 chipset) doesn't support natively linux container and a Linux VM is still required.

During last years Docker Inc release Docker Desktop suites for Mac that underthehood create a LinuxVM where  docker and docker-compose CLI could connect and run their container.

Starting from Aug 31 Docker Inc [announced](https://www.docker.com/press-release/docker-updates-product-subscriptions/) that a _Docker Desktop licence will be required for larger organization 250+_. While Docker Desktop suites will be under the Docker Inc license restriction, docker and docker-compose CLI will still remain free available to be used.


If Docker is the most famous container engine, several other container engines becomes popular and widely community supported. 

In this guide we will install *podman* container engines and we will connect docker and docker-compose CLI to the podman VM.

# Prerequisites 
In order to simplify the install of the packages, the [brew](https://brew.sh/) package manager will be used

# Install podman 
[Podman](https://podman.io/getting-started/installation) is a container engine that is part of the OCI inititiative. When installed on Mac, it used a QEMU engines to start a VM, called podman machine.

On latest release, podman machine have new features:
* You can now mount volume between the MacOS and the podman machine
* You can easily change podman machine CPUs, RAM and rootless mode
* You can install [podman desktop](https://podman-desktop.io/) to have a easy-to-use UI to manage your containers

To install podman on the the MacOS, you can run:

```
$ brew install podman
```

To start the first VM using default values:

```
$ poman machine init
$ poman machine start
```
You can run your first container by running:
```
$ podman run -dt -p 8080:80/tcp docker.io/library/httpd
```

To check if the container is running, you can use:
```
$ podman ps

CONTAINER ID  IMAGE                           COMMAND           CREATED        STATUS            PORTS                 NAMES
0d4565e14d71  docker.io/library/httpd:latest  httpd-foreground  8 seconds ago  Up 8 seconds ago  0.0.0.0:8080->80/tcp  gifted_shockley
```

The sample web server will run on http://localhost:8080/, to test it, you can use your browser or use
```
curl http://localhost:8080/
<html><body><h1>It works!</h1></body></html>
```
To stop the container run the command 

```
$ podman stop $(podman ps | grep httpd | awk '{print $1}')
```

To stop the VM run the command 
```
$ podman machine stop
```
## Podman useful commands

In order to mount volumes on your VM you need to add it during the init process. (If a VM already exist you ne stop delete the current VM by loosing downloaded images). Default volume mounts are defined in containers.conf. Unless changed, the default values is $HOME:$HOME.

```
$ podman machine init
$ podman machine init myvm
$ podman machine init --rootful
$ podman machine init --disk-size 50
$ podman machine init --memory=1024 myvm
$ podman machine init -v /Users:/mnt/Users
```

Memory, CPUs and and rootles permission can also be edited after the VM is created
```
$ podman machine stop
$ podman machine set -m 2048 --rootful
$ podman machine start
```


# Install docker and docker CLI

If you prefer to user docker and docker-compose CLI, you can still use it after you install and run the podman machine.

```
$ brew install docker docker-compose
```
You can then use the docker standard commands to run the containers:

```
$ docker run -dt -p 8080:80/tcp docker.io/library/httpd
```


Note: Not all the Docker fetures are fully supported on podman machines:
* Docker links are not supported (Use _podman pod_ if you need to segregate containers)
* Not all docker network capabilities are available

