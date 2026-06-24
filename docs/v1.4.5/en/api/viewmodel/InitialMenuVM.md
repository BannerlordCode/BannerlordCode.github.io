<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialMenuVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitialMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu/InitialMenuVM.cs`

## Overview

`InitialMenuVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuOptions` | `public MBBindingList<InitialMenuOptionVM> MenuOptions { get; set; }` |
| `Announcement` | `public InitialMenuAnnouncementVM Announcement { get; set; }` |
| `DownloadingText` | `public string DownloadingText { get; set; }` |
| `SelectProfileText` | `public string SelectProfileText { get; set; }` |
| `ProfileName` | `public string ProfileName { get; set; }` |
| `IsProfileSelectionEnabled` | `public bool IsProfileSelectionEnabled { get; set; }` |
| `IsDownloadingContent` | `public bool IsDownloadingContent { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `CurrentLanguageString` | `public string CurrentLanguageString { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### RefreshMenuOptions
`public void RefreshMenuOptions()`

**Purpose:** Refreshes the display or cache of `menu options`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new InitialMenuVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)