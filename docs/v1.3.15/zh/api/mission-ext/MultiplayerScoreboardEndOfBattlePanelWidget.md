<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerScoreboardEndOfBattlePanelWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardEndOfBattlePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardEndOfBattlePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs`

## 概述

`MultiplayerScoreboardEndOfBattlePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `FirstDelay` | `public float FirstDelay { get; set; }` |
| `SecondDelay` | `public float SecondDelay { get; set; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

## 使用示例

```csharp
// MultiplayerScoreboardEndOfBattlePanelWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerScoreboardEndOfBattlePanelWidget
var widget = root.GetChild("multiplayerScoreboardEndOfBattlePanelWidget");;
```

## 参见

- [完整类目录](../catalog)