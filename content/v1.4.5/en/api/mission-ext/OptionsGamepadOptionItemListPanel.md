---
title: "OptionsGamepadOptionItemListPanel"
description: "Auto-generated class reference for OptionsGamepadOptionItemListPanel."
---
# OptionsGamepadOptionItemListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadOptionItemListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad/OptionsGamepadOptionItemListPanel.cs`

## Overview

`OptionsGamepadOptionItemListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetKey` | `public OptionsGamepadKeyLocationWidget TargetKey { get; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `KeyId` | `public int KeyId { get; set; }` |

## Key Methods

### OnActionTextChangeEvent
`public delegate void OnActionTextChangeEvent()`

**Purpose:** **Purpose:** Invoked when the action text change event event is raised.

```csharp
// Obtain an instance of OptionsGamepadOptionItemListPanel from the subsystem API first
OptionsGamepadOptionItemListPanel optionsGamepadOptionItemListPanel = ...;
optionsGamepadOptionItemListPanel.OnActionTextChangeEvent();
```

### SetKeyProperties
`public void SetKeyProperties(OptionsGamepadKeyLocationWidget currentTarget, Widget parentAreaWidget)`

**Purpose:** **Purpose:** Assigns a new value to key properties and updates the object's internal state.

```csharp
// Obtain an instance of OptionsGamepadOptionItemListPanel from the subsystem API first
OptionsGamepadOptionItemListPanel optionsGamepadOptionItemListPanel = ...;
optionsGamepadOptionItemListPanel.SetKeyProperties(currentTarget, parentAreaWidget);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OptionsGamepadOptionItemListPanel optionsGamepadOptionItemListPanel = ...;
optionsGamepadOptionItemListPanel.OnActionTextChangeEvent();
```

## See Also

- [Area Index](../)