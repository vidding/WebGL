/**
 * Created by 魏永戍 on 2017/1/24.
 */
function main() {
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgb(0, 0, 255, 1.0)';
    ctx.fillRect(120, 10, 150, 150);
}