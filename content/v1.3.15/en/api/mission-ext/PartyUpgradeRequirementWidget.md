---
title: "PartyUpgradeRequirementWidget"
description: "Auto-generated class reference for PartyUpgradeRequirementWidget."
---
# PartyUpgradeRequirementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeRequirementWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeRequirementWidget.cs`

## Overview

`PartyUpgradeRequirementWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyUpgradeRequirementWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RequirementId` | `public string RequirementId { get; set; }` |
| `IsSufficient` | `public bool IsSufficient { get; set; }` |
| `IsPerkRequirement` | `public bool IsPerkRequirement { get; set; }` |
| `NormalColor` | `public Color NormalColor { get; set; }` |
| `InsufficientColor` | `public Color InsufficientColor { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyUpgradeRequirementWidget widget = ...;
```

## See Also

- [Area Index](../)