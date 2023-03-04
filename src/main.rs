use rocket::fs::{relative, FileServer};
use rocket_dyn_templates::Template;

#[macro_use]
extern crate rocket;

mod content;
mod tree;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Template::custom(|engines| {
            engines.tera.autoescape_on(vec![])
        }))
        .mount("/__static/", FileServer::from(relative!("static")).rank(-2))
        .mount("/", routes![content::serve])
}
