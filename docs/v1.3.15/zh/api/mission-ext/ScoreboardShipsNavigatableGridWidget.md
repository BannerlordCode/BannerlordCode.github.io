<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardShipsNavigatableGridWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardShipsNavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardShipsNavigatableGridWidget : NavigatableGridWidget`
**Base:** `NavigatableGridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardShipsNavigatableGridWidget.cs`

## 概述

`ScoreboardShipsNavigatableGridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegularHorizontalAlignment` | `public HorizontalAlignment RegularHorizontalAlignment { get; set; }` |
| `OverflowHorizontalAlignment` | `public HorizontalAlignment OverflowHorizontalAlignment { get; set; }` |

## 使用示例

```csharp
// ScoreboardShipsNavigatableGridWidget (Widget) 的典型用法
// 声明/访问一个 ScoreboardShipsNavigatableGridWidget
var widget = root.GetChild("scoreboardShipsNavigatableGridWidget");;
```

## 参见

- [完整类目录](../catalog)