---
title: "PartyManageTroopPopupWidget"
description: "Auto-generated class reference for PartyManageTroopPopupWidget."
---
# PartyManageTroopPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyManageTroopPopupWidget.cs`

## Overview

`PartyManageTroopPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyManageTroopPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent { get; set; }` |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent { get; set; }` |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyManageTroopPopupWidget widget = ...;
```

## See Also

- [Area Index](../)