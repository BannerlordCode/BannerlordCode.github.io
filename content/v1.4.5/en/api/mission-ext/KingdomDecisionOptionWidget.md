---
title: "KingdomDecisionOptionWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionOptionWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDecisionOptionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionOptionWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomDecisionOptionWidget.cs`

## Overview

`KingdomDecisionOptionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `KingdomDecisionOptionWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SealVisualWidget` | `public Widget SealVisualWidget { get; set; }` |
| `StrengthWidget` | `public DecisionSupportStrengthListPanel StrengthWidget { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsAbstain` | `public bool IsAbstain { get; set; }` |
| `SealStartWidth` | `public float SealStartWidth { get; set; }` |
| `SealStartHeight` | `public float SealStartHeight { get; set; }` |
| `SealEndWidth` | `public float SealEndWidth { get; set; }` |
| `SealEndHeight` | `public float SealEndHeight { get; set; }` |
| `SealAnimLength` | `public float SealAnimLength { get; set; }` |
| `IsOptionSelected` | `public bool IsOptionSelected { get; set; }` |
| `IsKingsOption` | `public bool IsKingsOption { get; set; }` |

## Usage Example

```csharp
var widget = new KingdomDecisionOptionWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)