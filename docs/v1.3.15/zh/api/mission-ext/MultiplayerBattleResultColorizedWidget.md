<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerBattleResultColorizedWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleResultColorizedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleResultColorizedWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerBattleResultColorizedWidget.cs`

## 概述

`MultiplayerBattleResultColorizedWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `DrawColor` | `public Color DrawColor { get; set; }` |
| `VictoryColor` | `public Color VictoryColor { get; set; }` |
| `DefeatColor` | `public Color DefeatColor { get; set; }` |

## 使用示例

```csharp
// MultiplayerBattleResultColorizedWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerBattleResultColorizedWidget
var widget = root.GetChild("multiplayerBattleResultColorizedWidget");;
```

## 参见

- [完整类目录](../catalog)