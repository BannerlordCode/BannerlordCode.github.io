<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerScoreboardStatsParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardStatsParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardStatsParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardStatsParentWidget.cs`

## 概述

`MultiplayerScoreboardStatsParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsInactive` | `public bool IsInactive { get; set; }` |
| `ActiveAlpha` | `public float ActiveAlpha { get; set; }` |
| `InactiveAlpha` | `public float InactiveAlpha { get; set; }` |

## 使用示例

```csharp
// MultiplayerScoreboardStatsParentWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerScoreboardStatsParentWidget
var widget = root.GetChild("multiplayerScoreboardStatsParentWidget");;
```

## 参见

- [完整类目录](../catalog)