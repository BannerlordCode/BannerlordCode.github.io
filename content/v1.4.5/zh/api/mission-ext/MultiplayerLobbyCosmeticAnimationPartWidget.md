---
title: "MultiplayerLobbyCosmeticAnimationPartWidget"
description: "MultiplayerLobbyCosmeticAnimationPartWidget 的自动生成类参考。"
---
# MultiplayerLobbyCosmeticAnimationPartWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationPartWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyCosmeticAnimationPartWidget.cs`

## 概述

`MultiplayerLobbyCosmeticAnimationPartWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyCosmeticAnimationPartWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeAnimationParameters
`public void InitializeAnimationParameters()`

**用途 / Purpose:** **用途 / Purpose:** 为 animation parameters 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyCosmeticAnimationPartWidget 实例
MultiplayerLobbyCosmeticAnimationPartWidget multiplayerLobbyCosmeticAnimationPartWidget = ...;
multiplayerLobbyCosmeticAnimationPartWidget.InitializeAnimationParameters();
```

### StartAnimation
`public void StartAnimation(float alphaChangeDuration, float minAlpha, float maxAlpha)`

**用途 / Purpose:** **用途 / Purpose:** 启动animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyCosmeticAnimationPartWidget 实例
MultiplayerLobbyCosmeticAnimationPartWidget multiplayerLobbyCosmeticAnimationPartWidget = ...;
multiplayerLobbyCosmeticAnimationPartWidget.StartAnimation(0, 0, 0);
```

### StopAnimation
`public void StopAnimation()`

**用途 / Purpose:** **用途 / Purpose:** 停止animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyCosmeticAnimationPartWidget 实例
MultiplayerLobbyCosmeticAnimationPartWidget multiplayerLobbyCosmeticAnimationPartWidget = ...;
multiplayerLobbyCosmeticAnimationPartWidget.StopAnimation();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyCosmeticAnimationPartWidget widget = ...;
```

## 参见

- [本区域目录](../)