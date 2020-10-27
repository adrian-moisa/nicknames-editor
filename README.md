# Running The App
Run in console `npm start`

# 0.0.0
- Typescript auto-sort imports extension installed
- Current homepage was hardcoded. No router was used.
- Although currently not used, the router module was installed to prepare ahead for future extensions
- Added `BuildingsModule`. Since the app is expected to be a manager of multiple data types we want to segregate them per modules. Possibly, later on, to lazy load them.
- Added `BuildingsPageComponent`, `BuildingsTableComponent`, `BuildingsTableItemComponent`
- Added Material Styles
- `NicknamesInputComponent` - Form components multiple nicknames per building
- Used Output to collect data from each `NicknamesInputComponent`
- Emulated saving by pushing the new data to the console
- Enable/Disable the submit button if duplicates are found
- Tested form validation

# Future Expansions
- Introducing UUIDs will help with better targeting of the validation rules.