<script type="text/javascript" src="js/script.js"></script>
<fieldset>
	
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
				<td><input name="userName" type="text" id="username"></td>
				<td></td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>Password</td>
				<td>:</td>
				<td><input name="password" type="password" id="password"></td>
				<td>
					<div>
						<p id="ePass"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>Confirm Password</td>
				<td>:</td>
				<td><input name="confirmPassword" type="password" id="confirmpassword"></td>
				<td></td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td colspan="3">
					<fieldset>
						<legend>Gender</legend>    
						<input name="gender" type="radio" id="gender" value="male">Male
						<input name="gender" type="radio" id="gender" value="female">Female
						<input name="gender" type="radio" id="gender" value="other" >Other
					</fieldset>
				</td>
				<td>
					<div>
						<p id="eGen"></p>
					</div>
				</td>
			</tr>		
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td colspan="3">
					<fieldset>
						<legend>Date of Birth</legend>    
						<input type="text" size="2" id="day" onclick="day()" onkeyup="day()">/
						<input type="text" size="2" id="month" onclick="month()" onkeyup="month()">/
						<input type="text" size="4" id="year" />
						<font size="2"><i>(dd/mm/yyyy)</i></font>
						
					</fieldset>
				</td>
				<td>
					<p id="dob" style="color: red">ss</p>
				</td>
			</tr>
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>
					<fieldset>
						<legend>Degree</legend>
						<input type="checkbox" name="D1" value="ssc">SSC
						<input type="checkbox" name="D1" value="hsc">HSC
						<input type="checkbox" name="D1" value="bsc">BSc
					</fieldset>
				</td>
			</tr>
			<tr><td colspan="4"><hr/></td></tr>
			<tr>
				<td>
					<fieldset>
						<legend></legend>
						Blood Group: <select>
						<option></option>
						<option>A+</option>
						<option>A-</option>
						<option>B+</option>
						<option>B-</option>
						<option>O+</option>
						<option>O-</option>
					</select>
					</fieldset>
				</td>
			</tr>
		</table>
		<hr/>
		<input type="button" value="Submit" onclick="validation()">
		<input type="button" value="Reset" onclick="reset()">
	</form>
</fieldset>