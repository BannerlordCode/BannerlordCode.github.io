<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentMatchWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentMatchWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentMatchWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentMatchWidget.cs`

## 概述

`TournamentMatchWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public int State { get; set; }` |

## 使用示例

```csharp
// TournamentMatchWidget (Widget) 的典型用法
// 声明/访问一个 TournamentMatchWidget
var widget = root.GetChild("tournamentMatchWidget");;
```

## 参见

- [完整类目录](../catalog)