Secret Sauce App
=======

A fun little app where you can type in a message, then a password, then the message gets decoded into a url.  Give the url and password to a friend and they can decode your message.


Setup
=======

Put this in your .profile so you can run 'serve' at your command line.  This runs a mini (webrick) web server.

<pre>
function serve() {
  port="${1:-4000}"
  ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => $port, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start"
}
</pre>

You will either need to source your .profile at this point or open a new terminal.
<pre>
source ~/.profile
</pre>

To run the server (on port 3001) at the command line, type:
<pre>
serve 3001
</pre>

Copy the decode.html and index.html files onto your machine.  Store them together in the same directory.


Use
=======

Direct your browser to the index.html file.  Type in your message.  Click Lock Down button.  Copy the url.  Open a new window if you like.  Go to the url.  Click Decode button.  Voila!  You have your decoded message.

Go have fun with it!
