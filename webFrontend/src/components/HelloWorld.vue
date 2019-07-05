<template>
	<div class="background">
		<div class="form">
			<el-form>
				<el-form-item prop="用户名">
					<el-input style="width:200px;"
										v-model="userInfo.name"
										placeholder="nice"
										size="mini"></el-input>
				</el-form-item>
				<el-form-item prop="密码">
					<el-input style="width:200px;"
										placeholder="nice"
										v-model="userInfo.password"
										size="mini"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary"
										 style="width:200px;"
										 @click="handleLogin"
										 size="mini">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { login } from "../api/login";
export default {
	name: "Login",
	data () {
		return {
			userInfo: {
				name: "",
				password: ""
			}
		};
	},
	methods: {
		handleLogin () {
			login(this.userInfo).then(res => {
				console.log(res)
			})
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.background {
	width: 100%;
	height: 100%;
	background: linear-gradient(
		45deg,
		rgba(116, 158, 210, 0.8),
		rgba(201, 145, 66, 0.8)
	);
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.form {
	width: 400px;
	height: 300px;
	vertical-align: middle;
}
</style>
