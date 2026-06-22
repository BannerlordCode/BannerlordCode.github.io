<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerScoreboardScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardScreenWidget.cs`

## 概述

`MultiplayerScoreboardScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `SingleColumnedWidth` | `public int SingleColumnedWidth { get; set; }` |
| `DoubleColumnedWidth` | `public int DoubleColumnedWidth { get; set; }` |
| `SidesList` | `public ListPanel SidesList { get; set; }` |

## 使用示例

```csharp
// MultiplayerScoreboardScreenWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerScoreboardScreenWidget
var widget = root.GetChild("multiplayerScoreboardScreenWidget");;
```

## 参见

- [完整类目录](../catalog)