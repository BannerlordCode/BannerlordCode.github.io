<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleResultColorizedWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `DrawColor` | `public Color DrawColor { get; set; }` |
| `VictoryColor` | `public Color VictoryColor { get; set; }` |
| `DefeatColor` | `public Color DefeatColor { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerBattleResultColorizedWidget (Widget)
// 声明/访问一个 MultiplayerBattleResultColorizedWidget
var widget = root.GetChild("multiplayerBattleResultColorizedWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)