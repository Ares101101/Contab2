// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, Window};
#[allow(unused_imports)]
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};
use window_shadows::set_shadow;

#[tauri::command]
async fn close_splashscreen(window: Window) {
  // Close splashscreen
  window.get_window("splashscreen").expect("no window labeled 'splashscreen' found").close().unwrap();
  // Show main window
  window.get_window("main").expect("no window labeled 'main' found").show().unwrap();
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splashscreen])
        .setup(|app| {
          let splashscreen_window = app.get_window("splashscreen").unwrap();
          let main_window = app.get_window("main").unwrap();
          // we perform the initialization code on a new task so the app doesn't freeze
          #[cfg(any(windows, target_os = "macos"))]
          set_shadow(&main_window, true).unwrap();
          
          #[cfg(target_os = "macos")]
          apply_vibrancy(&main_window, NSVisualEffectMaterial::HudWindow, None, None).expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

          #[cfg(target_os = "windows")]
          apply_blur(&main_window, Some((18, 18, 18, 125))).expect("Unsupported platform! 'apply_blur' is only supported on Windows");
          tauri::async_runtime::spawn(async move {
            // initialize your app here instead of sleeping :)
            println!("Initializing...");
            std::thread::sleep(std::time::Duration::from_secs(2));
            println!("Done initializing.");
    
            // After it's done, close the splashscreen and display the main window
            splashscreen_window.close().unwrap();
            main_window.show().unwrap();
          });
          Ok(())
        })
        .run(tauri::generate_context!())
        .expect("failed to run app")
    
}
