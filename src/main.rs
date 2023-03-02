use comrak::{markdown_to_html, ComrakOptions};
use rocket_dyn_templates::{context, Template};
use std::fs;
use std::path::{Path, PathBuf};

#[macro_use]
extern crate rocket;

#[get("/<path..>")]
fn index(path: PathBuf) -> Template {
    let path_to_file = Path::new("../../Notebook/").join(path);

    let file = fs::read(path_to_file).ok();

    Template::render(
        "layout",
        context! {
            title: "Hello",
            body: markdown_to_html(&String::from_utf8_lossy(&file.unwrap()).to_string(), &ComrakOptions::default()),
        },
    )
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Template::custom(|engines| {
            engines.tera.autoescape_on(vec![])
        }))
        .mount("/", routes![index])
}
