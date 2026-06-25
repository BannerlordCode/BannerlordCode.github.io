---
title: "WalkModeItemVM"
description: "Auto-generated class reference for WalkModeItemVM."
---
# WalkModeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WalkModeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode/WalkModeItemVM.cs`

## Overview

`WalkModeItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TypeId` | `public string TypeId { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of WalkModeItemVM from the subsystem API first
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of WalkModeItemVM from the subsystem API first
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.OnFinalize();
```

### OnEnabled
`public void OnEnabled()`

**Purpose:** Invoked when the enabled event is raised.

```csharp
// Obtain an instance of WalkModeItemVM from the subsystem API first
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.OnEnabled();
```

### ToggleState
`public void ToggleState()`

**Purpose:** Executes the ToggleState logic.

```csharp
// Obtain an instance of WalkModeItemVM from the subsystem API first
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.ToggleState();
```

### SetToggleInputKey
`public void SetToggleInputKey(HotKey hotKey, bool isHotKeyConsoleOnly)`

**Purpose:** Assigns a new value to toggle input key and updates the object's internal state.

```csharp
// Obtain an instance of WalkModeItemVM from the subsystem API first
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.SetToggleInputKey(hotKey, false);
```

### SetToggleInputKey
`public void SetToggleInputKey(GameKey gameKey, bool isHotKeyConsoleOnly)`

**Purpose:** Assigns a new value to toggle input key and updates the object's internal state.

```csharp
// Obtain an instance of WalkModeItemVM from the subsystem API first
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.SetToggleInputKey(gameKey, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.RefreshValues();
```

## See Also

- [Area Index](../)