---
title: "MultiplayerBattleResultColorizedWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleResultColorizedWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleResultColorizedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleResultColorizedWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerBattleResultColorizedWidget.cs`

## Overview

`MultiplayerBattleResultColorizedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerBattleResultColorizedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `DrawColor` | `public Color DrawColor { get; set; }` |
| `VictoryColor` | `public Color VictoryColor { get; set; }` |
| `DefeatColor` | `public Color DefeatColor { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerBattleResultColorizedWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)