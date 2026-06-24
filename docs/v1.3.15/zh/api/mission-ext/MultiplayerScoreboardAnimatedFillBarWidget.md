<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerScoreboardAnimatedFillBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
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

## 心智模型

把 `MultiplayerScoreboardAnimatedFillBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public void StartAnimation()`

**用途 / Purpose:** 处理 `start animation` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### FullFillFinishedHandler
`public delegate void FullFillFinishedHandler()`

**用途 / Purpose:** 处理 `full fill finished handler` 相关逻辑。

## 使用示例

```csharp
var widget = new MultiplayerScoreboardAnimatedFillBarWidget(context);
```

## 参见

- [完整类目录](../catalog)