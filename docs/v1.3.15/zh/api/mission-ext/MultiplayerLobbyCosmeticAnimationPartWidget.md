<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyCosmeticAnimationPartWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyCosmeticAnimationPartWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationPartWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCosmeticAnimationPartWidget.cs`

## 概述

`MultiplayerLobbyCosmeticAnimationPartWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyCosmeticAnimationPartWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeAnimationParameters
`public void InitializeAnimationParameters()`

**用途 / Purpose:** 初始化 `animation parameters` 的状态、资源或绑定。

### StartAnimation
`public void StartAnimation(float alphaChangeDuration, float minAlpha, float maxAlpha)`

**用途 / Purpose:** 处理 `start animation` 相关逻辑。

### StopAnimation
`public void StopAnimation()`

**用途 / Purpose:** 处理 `stop animation` 相关逻辑。

## 使用示例

```csharp
var widget = new MultiplayerLobbyCosmeticAnimationPartWidget(context);
```

## 参见

- [完整类目录](../catalog)