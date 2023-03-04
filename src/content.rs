use comrak::{markdown_to_html, ComrakOptions};
use rocket_dyn_templates::{context, Template};
use std::fs;
use std::path::{Path, PathBuf};

const ROOT: &str = "../../Notebook/";

#[get("/<path..>")]
pub fn serve(path: PathBuf) -> Template {
    Template::render(
        "content",
        context! {
            title: "Something",
            content: "<h1>Something</h1>",
        },
    )
}
