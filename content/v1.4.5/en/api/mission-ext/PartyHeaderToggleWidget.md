---
title: "PartyHeaderToggleWidget"
description: "Auto-generated class reference for PartyHeaderToggleWidget."
---
# PartyHeaderToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyHeaderToggleWidget.cs`

## Overview

`PartyHeaderToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyHeaderToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget { get; set; }` |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator { get; set; }` |
| `IsRelevant` | `public bool IsRelevant { get; set; }` |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** **Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of PartyHeaderToggleWidget from the subsystem API first
PartyHeaderToggleWidget partyHeaderToggleWidget = ...;
partyHeaderToggleWidget.SetState("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyHeaderToggleWidget widget = ...;
```

## See Also

- [Area Index](../)