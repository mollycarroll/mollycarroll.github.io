---
title: 'Thanks for nothing, sudo'
date: 'Fri Feb 28 02:08:21 MDT 2025'
draft: false
category: 'blog'
tags: [
    'blocker',
   'digital ocean',
   'ssh',
   'debugging',
   'virtual machines',
   'mac/linux differences',
   'constantly learning',
   'tech community support',
   'homebrew'
]
summary: 'I experienced one of those blockers that does not resolve despite omni-Googling and trying it all. I expected I was senior enough to be able to solve this silly thing. The culprit - SSH access to remote VMs'
---


I love coding, and doing this intensive project for a year hasn’t made me hate it, thankfully. However there is one output message I would enjoy never seeing ever again:

`Permission denied (publickey).`

I am not much able to explain why this is death to me particularly. Give me machine learning any day over the weirdness of SSH key matching between my Mac machine and a remote Ubuntu server instance. Unix is not Unix enough — WHY ARE THERE SLIGHTLY DIFFERENT COMMAND LINE SYNTAXES BETWEEN MAC AND LINUX I’ll stop complaining as soon as I treat myself to constructing my own custom Linux PC that runs GPUs for local AI dev.

I’m on a Mac mini (M2 chip) right now though, and really that should be fine. It should be. It is not fine when I get this same error for like 5 straight hours and I’ve done every single search result answer I can find ever.

Bonus: I’ve solved this in the past and successfully configured an RSA key for SSH on a Digital Ocean droplet. Yet I am writing this as this ability has vanished from my grasp.

DO docs advise creating a non-root user and giving it sudo privileges, and using that user to operate on the machine with SSH. I did that, plenty of attempts, but SSH denies my added user "permission" regardless. Plus, more recently it goes ahead and denies the root user permission too. Nobody gets in.

Sudo’s only functionality is making me enter my password before I get denied. Useless.

I suspect at this point it has something to do with Apple security/privacy settings and maybe I mess with the Keychain and get it going.

This experience gave me the idea of listing the nastiest blockers/bugs I’ve ever faced. Not sure what to call this yet but the goal is corny. (Is the goal ever not corny?)

Happy Fail Friday!
(I did just make that up just now)
(failing is cool)

And uh, if you have any suggestions for me feel free to comment or reach out.

(Spoiler: I did get past this, with the help of the DO Discord community - stay tuned for the story in a future post.)
