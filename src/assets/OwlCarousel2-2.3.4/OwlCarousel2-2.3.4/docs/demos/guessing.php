<form>
    <p><lable for="guess">Input Guess</lable>
    <input type="text" name="guess" size="40" id="guess"/></p>
    <input type="submit"/>
</form>
<pre>
$_POST:
<?php 
print_r($_POST);
?>
<?php 
print_r($_GET);
?>