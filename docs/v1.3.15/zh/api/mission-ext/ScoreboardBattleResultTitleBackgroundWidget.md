<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardBattleResultTitleBackgroundWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardBattleResultTitleBackgroundWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleResultTitleBackgroundWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleResultTitleBackgroundWidget.cs`

## 概述

`ScoreboardBattleResultTitleBackgroundWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `VictoryWidget` | `public Widget VictoryWidget { get; set; }` |
| `DefeatWidget` | `public Widget DefeatWidget { get; set; }` |
| `RetreatWidget` | `public Widget RetreatWidget { get; set; }` |

## 使用示例

```csharp
// ScoreboardBattleResultTitleBackgroundWidget (Widget) 的典型用法
// 声明/访问一个 ScoreboardBattleResultTitleBackgroundWidget
var widget = root.GetChild("scoreboardBattleResultTitleBackgroundWidget");;
```

## 参见

- [完整类目录](../catalog)