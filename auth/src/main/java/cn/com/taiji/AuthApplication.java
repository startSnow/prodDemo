package cn.com.taiji;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@SpringBootApplication
public class AuthApplication extends WebSecurityConfigurerAdapter{

	public static void main(String[] args) {
		SpringApplication.run(AuthApplication.class, args);
	}
	@Bean
	public ApplicationSecurity applicationSecurity() {
		return new ApplicationSecurity();
	}

	@Order(Ordered.HIGHEST_PRECEDENCE)
	@Configuration
	protected static class AuthenticationSecurity extends
			GlobalAuthenticationConfigurerAdapter {
		@Autowired
		private DataSource dataSource;

		@Bean
		public ShaPasswordEncoder passwordEncoder() {
			return new ShaPasswordEncoder(1);
		}

		@Override
		public void init(AuthenticationManagerBuilder auth) throws Exception {
			 auth.inMemoryAuthentication().withUser("admin").password("admin")
			 .roles("ADMIN", "USER").and().withUser("user")
			 .password("user").roles("USER");
			// @formatter:on
		}
	}

	@Order(Ordered.LOWEST_PRECEDENCE - 8)
	protected static class ApplicationSecurity extends
			WebSecurityConfigurerAdapter {

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			// @formatter:off
			http.authorizeRequests()
			      .antMatchers("/manage/**").hasRole("ADMIN")  // for actuator
					  .antMatchers("/some").permitAll()    // for test
					  .antMatchers("/test/**").permitAll()
					  .antMatchers("/login").permitAll()   // for login
					.anyRequest().fullyAuthenticated()      // all others need login
					  .and()
					.formLogin().loginPage("/login").failureUrl("/login?error") // login config
					  .and()
					.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")) //logout config
			      .and()
			    .exceptionHandling().accessDeniedPage("/access?error");  // exception
			http.csrf().disable();
			// @formatter:on
		}

	}
}
