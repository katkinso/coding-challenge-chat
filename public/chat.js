$(function() {
    var socket = io.connect('http://localhost:3000')

    var message = $("textarea#message")
    var sendMessage = $("#send-message")
    var chats = $("#chats")
    var username = $("#username")
    var err = $("#err")

    sendMessage.click(function(){
        if (message.val() && username.val()){
            socket.emit('new_message', { message : message.val(), username : username.val() })
            $("#err").html('');
        }else{
            $("#err").html("<p class='text-danger'>Please enter the information</p>");
        }
    })

    socket.on('new_message', (data) => {
        $("#chats").append('<p>'+ data.username + ':' + data.message + '</p>');
        $("#message").val('')
        
    })
    
    
})