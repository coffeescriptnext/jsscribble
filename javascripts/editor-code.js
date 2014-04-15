var jsEditor = ace.edit("js");
jsEditor.setTheme("ace/theme/monokai");
jsEditor.getSession().setMode("ace/mode/javascript");
jsEditor.on('change', renderResult);

var htmlEditor = ace.edit("html");
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.getSession().setMode("ace/mode/html");
htmlEditor.on('change', renderResult);

var cssEditor = ace.edit("css");
cssEditor.setTheme("ace/theme/monokai");
cssEditor.getSession().setMode("ace/mode/css");
cssEditor.on('change', renderResult);

// Buttons
$('#round-button').on('click', renderResult);
$('#auto-run').on('click', function () {
    if($('#auto-run').attr('data-value') === 'on') {
        $('#auto-run').attr('data-value', 'off');
        $('#auto-run').html('Auto Run OFF');
        cssEditor.removeEventListener('change', renderResult)
        htmlEditor.removeEventListener('change', renderResult)
        jsEditor.removeEventListener('change', renderResult)
    } else {
        $('#auto-run').attr('data-value', 'on');
        $('#auto-run').html('Auto Run ON');
        cssEditor.on('change', renderResult);
        htmlEditor.on('change', renderResult);
        jsEditor.on('change', renderResult);
    }
});
    
function renderResult(e) {
    var cssCode = cssEditor.getValue(),
        jsCode = jsEditor.getValue(),
        htmlCode = htmlEditor.getValue();

    var code = '<style>' + cssCode + '</style>' +
            htmlCode + '<script>' + jsCode + '</script>';

    // $.ajax({
    //     type: "POST",
    //     url: "/code-submission",
    //     data: {
    //         code: code
    //     }
    // })
    // .done(function( response ) {
    //     document.getElementById('res').contentWindow.location.reload();
    //     // alert(response);
    // })
    // .fail(function (response) {
    //     alert('error');
    // });

    $('#res').attr('srcdoc', code);
    
}

function noAction (e) {
    // No action
    console.log('now here');
}
