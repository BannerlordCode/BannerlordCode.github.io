<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPollProgressionWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPollProgressionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollProgressionWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPollProgressionWidget.cs`

## 概述

`MultiplayerPollProgressionWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasOngoingPoll` | `public bool HasOngoingPoll { get; set; }` |
| `PollExtension` | `public ListPanel PollExtension { get; set; }` |

## 使用示例

```csharp
// MultiplayerPollProgressionWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerPollProgressionWidget
var widget = root.GetChild("multiplayerPollProgressionWidget");;
```

## 参见

- [完整类目录](../catalog)