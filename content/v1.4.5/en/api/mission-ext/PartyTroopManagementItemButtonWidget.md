---
title: "PartyTroopManagementItemButtonWidget"
description: "Auto-generated class reference for PartyTroopManagementItemButtonWidget."
---
# PartyTroopManagementItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopManagementItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyTroopManagementItemButtonWidget.cs`

## Overview

`PartyTroopManagementItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyTroopManagementItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionButtonsContainer` | `public Widget ActionButtonsContainer { get; set; }` |

## Key Methods

### GetActionButtonAtIndex
`public Widget GetActionButtonAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the action button at index value held by the this instance.

```csharp
// Obtain an instance of PartyTroopManagementItemButtonWidget from the subsystem API first
PartyTroopManagementItemButtonWidget partyTroopManagementItemButtonWidget = ...;
var result = partyTroopManagementItemButtonWidget.GetActionButtonAtIndex(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyTroopManagementItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)