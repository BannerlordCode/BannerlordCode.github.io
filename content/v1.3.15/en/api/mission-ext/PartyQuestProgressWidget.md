---
title: "PartyQuestProgressWidget"
description: "Auto-generated class reference for PartyQuestProgressWidget."
---
# PartyQuestProgressWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyQuestProgressWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs`

## Overview

`PartyQuestProgressWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyQuestProgressWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemCount` | `public int ItemCount { get; set; }` |
| `DividerContainer` | `public ListPanel DividerContainer { get; set; }` |
| `DividerBrush` | `public Brush DividerBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyQuestProgressWidget widget = ...;
```

## See Also

- [Area Index](../)