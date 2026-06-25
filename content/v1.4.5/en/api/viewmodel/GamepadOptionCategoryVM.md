---
title: "GamepadOptionCategoryVM"
description: "Auto-generated class reference for GamepadOptionCategoryVM."
---
# GamepadOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadOptionCategoryVM : GroupedOptionCategoryVM`
**Base:** `GroupedOptionCategoryVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions/GamepadOptionCategoryVM.cs`

## Overview

`GamepadOptionCategoryVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentGamepadType` | `public int CurrentGamepadType { get; set; }` |
| `OtherKeys` | `public MBBindingList<GamepadOptionKeyItemVM> OtherKeys { get; set; }` |
| `DpadKeys` | `public MBBindingList<GamepadOptionKeyItemVM> DpadKeys { get; set; }` |
| `LeftTriggerAndBumperKeys` | `public MBBindingList<GamepadOptionKeyItemVM> LeftTriggerAndBumperKeys { get; set; }` |
| `RightTriggerAndBumperKeys` | `public MBBindingList<GamepadOptionKeyItemVM> RightTriggerAndBumperKeys { get; set; }` |
| `RightAnalogKeys` | `public MBBindingList<GamepadOptionKeyItemVM> RightAnalogKeys { get; set; }` |
| `LeftAnalogKeys` | `public MBBindingList<GamepadOptionKeyItemVM> LeftAnalogKeys { get; set; }` |
| `FaceKeys` | `public MBBindingList<GamepadOptionKeyItemVM> FaceKeys { get; set; }` |
| `Actions` | `public MBBindingList<SelectorVM<SelectorItemVM>> Actions { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GamepadOptionCategoryVM from the subsystem API first
GamepadOptionCategoryVM gamepadOptionCategoryVM = ...;
gamepadOptionCategoryVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GamepadOptionCategoryVM from the subsystem API first
GamepadOptionCategoryVM gamepadOptionCategoryVM = ...;
gamepadOptionCategoryVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GamepadOptionCategoryVM gamepadOptionCategoryVM = ...;
gamepadOptionCategoryVM.RefreshValues();
```

## See Also

- [Area Index](../)