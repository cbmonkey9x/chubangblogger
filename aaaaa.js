$(document).ready(function () {
    $("pre").each(function () {
        var _0x4332x2 = $(this).text();
        var _0x4332x3 = $(this).attr("class");
        _0x4332x2 = _0x4332x2.replace(/&/g, "&amp;");
        _0x4332x2 = _0x4332x2.replace(/</g, "&lt;");
        _0x4332x2 = _0x4332x2.replace(/>/g, "&gt;");
        _0x4332x2 = _0x4332x2.replace(/"/g, "&quot;");
        _0x4332x2 = _0x4332x2.replace(/'/g, "&#039;");
        $(this).html("<copy class=\"" + _0x4332x3 + "\">" + _0x4332x2 + "</copy>")
    });
    $("copy").each(function (_0x4332x4, _0x4332x5) {
        hljs.highlightBlock(_0x4332x5)
    })
});
$(document).ready(function () {
    var _0x4332x6 = $("pre copy"),
        _0x4332x7 = "<button class=\"copycode\" alt=\"Chu Bằng Blogger - chubangblogger.blogspot.com\" title=\"Chu Bằng Blogger - chubangblogger.blogspot.com\"><i class=\"fa fa-clipboard\"></i> Copy</button>";
    _0x4332x6.before(_0x4332x7)
});
(function (_0x4332x7) {
    _0x4332x7.fn.selectText = function () {
        var _0x4332x8 = document;
        var _0x4332x9 = this[0];
        console.log(this, _0x4332x9);
        if (_0x4332x8.body.createTextRange) {
            var _0x4332x6 = document.body.createTextRange();
            _0x4332x6.moveToElementText(_0x4332x9);
            _0x4332x6.select()
        } else {
            if (window.getSelection) {
                var _0x4332xa = window.getSelection();
                var _0x4332x6 = document.createRange();
                _0x4332x6.selectNodeContents(_0x4332x9);
                _0x4332xa.removeAllRanges();
                _0x4332xa.addRange(_0x4332x6);
                document.execCommand("Copy")
            }
        }
    };
    _0x4332x7.fn.removeRange = function () {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty()
            } else {
                if (window.getSelection().removeAllRanges) {
                    window.getSelection().removeAllRanges()
                }
            }
        } else {
            if (document.selection) {
                document.selection.empty()
            }
        }
    }
})(jQuery);
$(document).ready(function () {
    $(".copycode").click(function () {
        var _0x4332x6 = $(this).parent().find("copy"),
            _0x4332x7 = $(this),
            _0x4332xb = "<i class=\"fa fa-spinner fa-pulse\"></i> Copied",
            _0x4332xc = _0x4332x7.html();
        _0x4332x6.selectText();
        _0x4332x7.html(_0x4332xb);
        setTimeout(function () {
            _0x4332x7.html(_0x4332xc);
            _0x4332x6.removeRange()
        }, 1000)
    })
})
