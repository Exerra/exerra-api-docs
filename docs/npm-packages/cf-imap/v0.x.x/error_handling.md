# Errors

They are a part of life when coding. They happen in every project, and thus they should be as descriptive as possible. **That is why `cf-imap` throws descriptive errors along with the relevant info using the [`cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#cause) option.**

Let's take the login process as an example. You initialise the class and when you try to connect and it throws an error! The first part of the error is the text `IMAP server not responding with an A1 OK.` which immediately tells you that something is amiss. However, there could be many reasons for that! Is it a server error? Is it something you did? Maybe it is the package! Then comes in the 2nd part, or more accurately, the very end. At the end is attached the response. From there you can check what caused the error. If those are invalid creds, now you can fix it! If the server is having issues, you can check the status! And lastly, if the package has some sort of issue, you can [raise an issue on GitHub](https://github.com/Exerra/cf-imap/issues).

![Example of a login error](https://share.exerra.xyz/LHIdcvu.png)