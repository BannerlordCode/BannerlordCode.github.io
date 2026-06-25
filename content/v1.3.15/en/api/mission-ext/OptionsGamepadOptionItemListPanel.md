---
title: "OptionsGamepadOptionItemListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsGamepadOptionItemListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsGamepadOptionItemListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadOptionItemListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs`

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

### SetKeyProperties
`public void SetKeyProperties(OptionsGamepadKeyLocationWidget currentTarget, Widget parentAreaWidget)`

**Purpose:** Sets the value or state of `key properties`.

### OnActionTextChangeEvent
`public delegate void OnActionTextChangeEvent()`

**Purpose:** Called when the `action text change event` event is raised.

## Usage Example

```csharp
var value = new OptionsGamepadOptionItemListPanel();
value.SetKeyProperties(currentTarget, parentAreaWidget);
```

## See Also

- [Complete Class Catalog](../catalog)