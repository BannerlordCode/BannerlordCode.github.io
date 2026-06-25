---
title: "PhotoModeVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PhotoModeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PhotoModeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PhotoModeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs`

## Overview

`PhotoModeVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Keys` | `public MBBindingList<InputKeyItemVM> Keys { get; set; }` |
| `ColorGradeSelector` | `public SelectorVM<SelectorItemVM> ColorGradeSelector { get; set; }` |
| `OverlaySelector` | `public SelectorVM<SelectorItemVM> OverlaySelector { get; set; }` |
| `FocusEndValueOption` | `public PhotoModeValueOptionVM FocusEndValueOption { get; set; }` |
| `FocusStartValueOption` | `public PhotoModeValueOptionVM FocusStartValueOption { get; set; }` |
| `FocusValueOption` | `public PhotoModeValueOptionVM FocusValueOption { get; set; }` |
| `ExposureOption` | `public PhotoModeValueOptionVM ExposureOption { get; set; }` |
| `VerticalFovOption` | `public PhotoModeValueOptionVM VerticalFovOption { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### AddTakePictureKey
`public void AddTakePictureKey(GameKey key)`

**Purpose:** Adds `take picture key` to the current collection or state.

### AddFasterCameraKey
`public void AddFasterCameraKey(HotKey hotkey)`

**Purpose:** Adds `faster camera key` to the current collection or state.

### AddKey
`public void AddKey(GameKey key)`

**Purpose:** Adds `key` to the current collection or state.

### AddHotkey
`public void AddHotkey(HotKey hotkey)`

**Purpose:** Adds `hotkey` to the current collection or state.

### AddHotkeyWithForcedName
`public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)`

**Purpose:** Adds `hotkey with forced name` to the current collection or state.

### AddConsoleTakePictureKey
`public void AddConsoleTakePictureKey(string keyID, TextObject forcedName)`

**Purpose:** Adds `console take picture key` to the current collection or state.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### UpdateTakePictureKeyVisibility
`public void UpdateTakePictureKeyVisibility(bool canTakePicture)`

**Purpose:** Updates the state or data of `take picture key visibility`.

### UpdateFasterCameraKeyVisibility
`public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)`

**Purpose:** Updates the state or data of `faster camera key visibility`.

## Usage Example

```csharp
var value = new PhotoModeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)