---
templateKey: blog-post
title: Handy Commands On Linux For Cloud Engineers(Beginners)
date: 2021-02-28T07:28:34.515Z
description: a list of simple commands on Linux for beginner cloud engineers.
featuredpost: true
featuredimage: /img/twarren_bashmacos_1.0.webp
tags:
  - azure
  - linux
  - cli
---
![terminal](/img/twarren_bashmacos_1.0.webp "mac terminal")



As part of my journey towards the Cloud, I have had to come to terms that Linux kernel Commands plays a very important role in my journey towards being a Cloud Engineer.

As a Cloud Engineer, it’s recommended to use a command-line interface (CLI) than the Cloud Providers portal because it’s more powerful and effective. Tasks that require a multi-step process through GUI can be done in a matter of seconds by typing commands into the CLI.

Let's go!

1. ## **wget command**

**Wget** is a command-line utility for downloading files from the web. With **wget**, you can download files using HTTP, HTTPS, and FTP protocols. Wget provides a number of options allowing you to download multiple files, resume downloads, limit the bandwidth, recursive downloads, download in the background, mirror a website, and much more. 

The wget package is pre-installed on most Linux distributions today. If wget is not installed, you can easily install it using the package manager of your distro.

```shell
~ wget [options] [url]
```


2. ## **ping command**

Use the **ping** command to check your connectivity status to a server. For example, by simply entering **ping google.com**, the command will check whether you’re able to connect to Google and also measure the response time. You can ping both the public Domain Name System(DNS) name and IP addresses.

```shell
~ ping google.com
```


3. ## **jobs Command** 

**Jobs command** is used to list the **jobs** that you are running in the background and in the foreground. If the prompt is returned with no information no **jobs** are present. You can also use the **job command** to display jobs based on the name of the job or the first letter of the name of the job using a like syntax i.e %p to display all jobs that starts with the letter p. All shells are not capable of running this **command**. This **command** is only available in the csh, bash, tcsh, and ksh shells.

```shell
~ jobs [options]
```


4. ## **du command**

If you want to check how much space a file or a directory takes, the **du** short for "Disk Usage" command is the answer. However, the disk usage summary will show disk block numbers instead of the usual size format. If you want to see it in bytes, kilobytes, and megabytes, add the **\-h** argument to the command line.

```shell
~ du [options]
```


5. ## **cd command**

The **cd command**, also known as chdir (change directory), is a **command**-line shell **command** used to change the current working directory in various operating systems. you can either pass an absolute or relative path to cd. It can be used in shell scripts and batch files.

```shell
~ cd absolute or relative path
```


6. ## **grep command**

Short for "**Global Regular Expression Print**." Another basic Linux command that is undoubtedly helpful for everyday use. It is used to search for a string of characters in a specified file. i.e you can use regular expressions with **grep** to extract an **IP address** from a **file.** The text search pattern is called a regular expression. When it finds a match, it prints the line with the result.

```shell
~ grep [options] pattern [files]
```


7. ## **sudo command**

Short for “**Super User Do**”,  is generally used as a prefix of some command that only superuser are allowed to run. If you prefix **“sudo”** with any command, it will run that command with elevated privileges or in other words allow a user with proper permissions to execute a command as another user, such as the superuser. This is the equivalent of “run as administrator” option in Windows. The option of sudo lets us have multiple administrators. However, it is not advisable to use this command for daily use because it might be easy for an error to occur if you did something wrong.

```shell
~ sudo OPTION.. COMMAND
```


8. ## **find command**

This is one of the most important and frequently used **command**-line utility in Unix-like operating systems. f**ind command** is used to search and **locate** the list of files and directories based on conditions you specify for files that match the arguments. you can find files based on the following:

   a. Names

   b. their Permissions

   c. Owners and Groups

   d. Date and Time

   e. on Size

 The example below find all the files whose name is users.txt in a current working   directory.

```shell
~ find . -name users.txt
```


9. ## **cat command**

This command is called the *concatenate* command it is used to view the content of a file. Line 1 below is the command being passed. line 2-4 is the result.

```shell
~ cat tasks
<!DOCTYPE html>
<h1> Hello, world!<h1>
</html>
```


10. ## **cp command**

The **cp** command copies file using this format from left to right as shown below:

```shell
~ cp [file1] [file2]
```


11. ## **mv command**

The **mv** command is used to move a file/directory from one location to another. The files/directories being moved can be renamed in the process. The file to be renamed is passed in as the first argument.

```shell
~ mv [file1] [file2]
```


12. ## **rm command**

Short for **"remove"** is used to remove objects such as computer files, directories and symbolic links from file systems and also special files such as device nodes, pipes and sockets, similar to the "del" **command** in MS-DOS, OS/2, and Microsoft Windows.

Options like `-f` can be passed to forcefully delete files; this option should be used with care as whole filesystems can be lost this way. The `-r` option is used when deleting a directory as this allows the `rm` command to be able to go into lower subdirectories and delete them along with their containing file(s). In the example below, the command would permanently delete the directory jujutsu kaisen and its sub-directories/files.

```shell
~ rm -rf 'jujutsi kaisen'
```


13. ## **touch command**

The **touch** command is used to create files. you can also use it to create multiple files at once.

```shell
~ /demo touch Dockerfile app.js package.json services.yaml
```


14. ## **mkdir command**

You use the command **mkdir** meaning "make directories" to, just as the name implies, make directories or folders.

```shell
~ mkdir demo && cd demo
```


15. ## **ls command**

 ls short for "list files" is used to list things in files and directories and sometimes options are passed to get more information about them. To get the list in a specific directory the path is passed as an argument.

```shell
~ ls
```