---
title: "PhotoModeVM"
description: "Auto-generated class reference for PhotoModeVM."
---
# PhotoModeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PhotoModeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.RefreshValues();
```

### AddTakePictureKey
`public void AddTakePictureKey(GameKey key)`

**Purpose:** Adds `take picture key` to the current collection or state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.AddTakePictureKey(key);
```

### AddFasterCameraKey
`public void AddFasterCameraKey(HotKey hotkey)`

**Purpose:** Adds `faster camera key` to the current collection or state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.AddFasterCameraKey(hotkey);
```

### AddKey
`public void AddKey(GameKey key)`

**Purpose:** Adds `key` to the current collection or state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.AddKey(key);
```

### AddHotkey
`public void AddHotkey(HotKey hotkey)`

**Purpose:** Adds `hotkey` to the current collection or state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.AddHotkey(hotkey);
```

### AddHotkeyWithForcedName
`public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)`

**Purpose:** Adds `hotkey with forced name` to the current collection or state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.AddHotkeyWithForcedName(hotkey, forcedName);
```

### AddCustomKey
`public void AddCustomKey(string keyID, TextObject forcedName)`

**Purpose:** Adds `custom key` to the current collection or state.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.AddCustomKey("example", forcedName);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.OnFinalize();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.Reset();
```

### UpdateTakePictureKeyVisibility
`public void UpdateTakePictureKeyVisibility(bool canTakePicture)`

**Purpose:** Recalculates and stores the latest representation of `take picture key visibility`.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.UpdateTakePictureKeyVisibility(false);
```

### UpdateFasterCameraKeyVisibility
`public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)`

**Purpose:** Recalculates and stores the latest representation of `faster camera key visibility`.

```csharp
// Obtain an instance of PhotoModeVM from the subsystem API first
PhotoModeVM photoModeVM = ...;
photoModeVM.UpdateFasterCameraKeyVisibility(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PhotoModeVM photoModeVM = ...;
photoModeVM.RefreshValues();
```

## See Also

- [Area Index](../)