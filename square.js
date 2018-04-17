module.exports = function (wid) {
    return {
        width:wid,
        area: function() {
            return this.width * this.width;
        },
        circum  : function(){
            return 4 * this.width;
        }
    };
}