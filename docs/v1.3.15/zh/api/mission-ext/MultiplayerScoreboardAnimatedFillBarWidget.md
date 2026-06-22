<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerScoreboardAnimatedFillBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## 概述

`MultiplayerScoreboardAnimatedFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsStartRequested` | `public bool IsStartRequested { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TimesOfFullFill` | `public int TimesOfFullFill { get; set; }` |
| `ChangeOverlayWidget` | `public Widget ChangeOverlayWidget { get; set; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

### FullFillFinishedHandler
```csharp
public delegate void FullFillFinishedHandler()
```

## 使用示例

```csharp
// MultiplayerScoreboardAnimatedFillBarWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerScoreboardAnimatedFillBarWidget
var widget = root.GetChild("multiplayerScoreboardAnimatedFillBarWidget");;
```

## 参见

- [完整类目录](../catalog)