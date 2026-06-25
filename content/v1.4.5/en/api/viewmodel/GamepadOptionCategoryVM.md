---
title: "GamepadOptionCategoryVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadOptionCategoryVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GamepadOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadOptionCategoryVM : GroupedOptionCategoryVM`
**Base:** `GroupedOptionCategoryVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions/GamepadOptionCategoryVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new GamepadOptionCategoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)