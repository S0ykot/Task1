<h1 id="message">Message</h1>

<script type="text/javascript" src="js/script.js"></script>

<fieldset style="width: 900px">
	
    <legend><b>REGISTRATION</b></legend>
	<form method="POST">
		<br/>
		<table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td>Name</td>
				<td>:</td>
				<td><input name="name" type="text" id="name" onkeyup="valid_name()" onclick="valid_name()"></td>
				<td>
					<div>
						<p id="eName" style="color: red"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>Email</td>
				<td>:</td>
				<td>
					<input name="email" type="text" id="email" onkeyup="valid_email()" onclick="valid_email()">
					<abbr title="hint: sample@example.com"><b>i</b></abbr>
				</td>
				<td>
					<div>
						<p id="Email" style="color: red"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>User Name</td>
				<td>:</td>
				<td><input name="userName" type="text" id="username" onclick="valid_uname()" onkeyup="valid_uname()"></td>
				<td>
					<dir>
					 <p id="euser" style="color: red"></p>
					</dir>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>Password</td>
				<td>:</td>
				<td><input name="password" type="password" id="password" onkeyup="pass()" onclick="pass()" onchange="pass()"></td>
				<td>
					<div>
						<p id="pass1" style="color: red"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>Confirm Password</td>
				<td>:</td>
				<td><input name="confirmPassword" type="password" id="confirmpassword" onkeyup="cpass()" onclick="cpass()" onchange="cpass()"></td>
				<td>
					<div>
						<p id="pass2" style="color: red"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td colspan="3">
					<fieldset onmouseover="valid_gender()" onclick="valid_gender()">
						<legend>Gender</legend>    
						<input name="gender" type="radio" id="gender1" value="male">Male
						<input name="gender" type="radio" id="gender2" value="female">Female
						<input name="gender" type="radio" id="gender3" value="other" >Other
					</fieldset>
				</td>
				<td>
					<div>
						<p id="eGen" style="color: red"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td colspan="3">
					<fieldset>
						<legend>Date of Birth</legend>    
						<input type="text" name="day" size="2" id="day" onclick="valid_day()" onkeyup="valid_day()">/
						<input type="text" name="month" size="2" id="month" onclick="valid_month()" onkeyup="valid_month()">/
						<input type="text" name="year" size="4" id="year" onkeyup="valid_year()" onclick="valid_year()" />
						<font size="2"><i>(dd/mm/yyyy)</i></font>
						
					</fieldset>
				</td>
				<td>
					<p id="d" style="color: red"></p>
					<p id="m" style="color: red"></p>
					<p id="y" style="color: red"></p>
				</td>
			</tr>
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>
					<fieldset onmouseover="valid_degree()" onclick="valid_degree()">
						<legend>Degree</legend>
						<input type="checkbox" name="D[]" value="ssc" id="c1">SSC
						<input type="checkbox" name="D[]" value="hsc" id="c2">HSC
						<input type="checkbox" name="D[]" value="bsc" id="c3">BSc
					</fieldset>
				</td>
				<td>
					<div>
						<p id="deg" style="color: red"></p>
					</div>
				</td>
			</tr>
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>
					<fieldset >
						<legend>Blood Group:</legend>
						 <select id ="blood" onmouseover="valid_blood()" onclick="valid_blood()" name="bloodG">
						<option value=""></option>
						<option value="A+">A+</option>
						<option value="A-">A-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
					</select>
					</fieldset>
				</td>
				<td>
					<div>
						<p id="bg" style="color: red"></p>
					</div>
				</td>
			</tr>

			<tr>
				<td>
				<fieldset >
					<legend>Image upload</legend>
					
					<br>
					Profile pic:<input type="file" name="profile" id="pro" onchange="valid_photo()" onclick="valid_photo()" onmouseover="valid_photo()" />
				</td>
				<td>
					<div>
						<p id="ePro" style="color: red"></p>
					</div>
				
				</fieldset>
				</td>
			</tr>
		</table>
		<hr/>
	</form>
	<input type="button" name="hit" value="Submit" onclick="validation(); signup()">
		<input type="button" value="Reset" onclick="reset()">
</fieldset>