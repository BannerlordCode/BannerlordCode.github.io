<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentParticipantBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentParticipantBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs`

## 概述

`TournamentParticipantBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `MatchState` | `public int MatchState { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `MainHeroTextBrush` | `public Brush MainHeroTextBrush { get; set; }` |
| `NormalTextBrush` | `public Brush NormalTextBrush { get; set; }` |
| `OnMission` | `public bool OnMission { get; set; }` |

## 使用示例

```csharp
// TournamentParticipantBrushWidget (Widget) 的典型用法
// 声明/访问一个 TournamentParticipantBrushWidget
var widget = root.GetChild("tournamentParticipantBrushWidget");;
```

## 参见

- [完整类目录](../catalog)