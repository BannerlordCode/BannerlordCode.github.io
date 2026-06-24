<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardScreenWidget.cs`

## 概述

`ScoreboardScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScoreboardScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShowScoreboard` | `public bool ShowScoreboard { get; set; }` |
| `IsOver` | `public bool IsOver { get; set; }` |
| `BattleResult` | `public int BattleResult { get; set; }` |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead { get; set; }` |
| `IsSimulation` | `public bool IsSimulation { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `ScrollGradient` | `public Widget ScrollGradient { get; set; }` |
| `ControlButtonsPanel` | `public Widget ControlButtonsPanel { get; set; }` |
| `InputKeysPanel` | `public ListPanel InputKeysPanel { get; set; }` |
| `ShowMouseIconWidget` | `public Widget ShowMouseIconWidget { get; set; }` |
| `FastForwardWidget` | `public Widget FastForwardWidget { get; set; }` |
| `QuitButton` | `public ButtonWidget QuitButton { get; set; }` |
| `ShowScoreboardToggle` | `public ButtonWidget ShowScoreboardToggle { get; set; }` |
| `BattleRewardsWidget` | `public ScoreboardBattleRewardsWidget BattleRewardsWidget { get; set; }` |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess { get; set; }` |
| `FlagsRetreat` | `public DelayedStateChanger FlagsRetreat { get; set; }` |
| `FlagsDefeat` | `public DelayedStateChanger FlagsDefeat { get; set; }` |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger { get; set; }` |
| `ShipsStateChanger` | `public DelayedStateChanger ShipsStateChanger { get; set; }` |
| `TitleStateChanger` | `public DelayedStateChanger TitleStateChanger { get; set; }` |
| `TitleBackgroundStateChanger` | `public DelayedStateChanger TitleBackgroundStateChanger { get; set; }` |

## 使用示例

```csharp
var widget = new ScoreboardScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)