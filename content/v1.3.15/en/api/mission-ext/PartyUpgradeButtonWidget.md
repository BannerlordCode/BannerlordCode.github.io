---
title: "PartyUpgradeButtonWidget"
description: "Auto-generated class reference for PartyUpgradeButtonWidget."
---
# PartyUpgradeButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs`

## Overview

`PartyUpgradeButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyUpgradeButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; set; }` |
| `MarinerTroopBrush` | `public BrushWidget MarinerTroopBrush { get; set; }` |
| `UnavailableBrush` | `public Brush UnavailableBrush { get; set; }` |
| `InsufficientBrush` | `public Brush InsufficientBrush { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyUpgradeButtonWidget widget = ...;
```

## See Also

- [Area Index](../)