<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerScoreboardSideWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardSideWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardSideWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs`

## 概述

`MultiplayerScoreboardSideWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureColor` | `public Color CultureColor { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `UseSecondary` | `public bool UseSecondary { get; set; }` |
| `NameColumnWidthRatio` | `public float NameColumnWidthRatio { get; set; }` |
| `TitlesListPanel` | `public ListPanel TitlesListPanel { get; set; }` |

## 使用示例

```csharp
// MultiplayerScoreboardSideWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerScoreboardSideWidget
var widget = root.GetChild("multiplayerScoreboardSideWidget");;
```

## 参见

- [完整类目录](../catalog)