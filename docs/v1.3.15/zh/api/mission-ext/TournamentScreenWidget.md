<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs`

## 概述

`TournamentScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TournamentScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsOver` | `public bool IsOver { get; set; }` |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess { get; set; }` |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger { get; set; }` |
| `WinnerTextContainer1` | `public DelayedStateChanger WinnerTextContainer1 { get; set; }` |
| `CharacterContainer` | `public DelayedStateChanger CharacterContainer { get; set; }` |
| `RewardsContainer` | `public DelayedStateChanger RewardsContainer { get; set; }` |
| `ScoreboardBattleRewardsWidget` | `public ScoreboardBattleRewardsWidget ScoreboardBattleRewardsWidget { get; set; }` |

## 使用示例

```csharp
var widget = new TournamentScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)