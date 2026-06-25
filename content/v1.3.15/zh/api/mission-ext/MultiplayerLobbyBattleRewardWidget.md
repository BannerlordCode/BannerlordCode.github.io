---
title: "MultiplayerLobbyBattleRewardWidget"
description: "MultiplayerLobbyBattleRewardWidget 的自动生成类参考。"
---
# MultiplayerLobbyBattleRewardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBattleRewardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs`

## 概述

`MultiplayerLobbyBattleRewardWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyBattleRewardWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TextRevealAnimationDuration` | `public float TextRevealAnimationDuration { get; set; }` |
| `AnimationInitialScaleMultiplier` | `public float AnimationInitialScaleMultiplier { get; set; }` |

## 主要方法

### StartAnimation
`public void StartAnimation()`

**用途 / Purpose:** 启动「animation」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyBattleRewardWidget 实例
MultiplayerLobbyBattleRewardWidget multiplayerLobbyBattleRewardWidget = ...;
multiplayerLobbyBattleRewardWidget.StartAnimation();
```

### StartPreAnimation
`public void StartPreAnimation()`

**用途 / Purpose:** 启动「pre animation」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyBattleRewardWidget 实例
MultiplayerLobbyBattleRewardWidget multiplayerLobbyBattleRewardWidget = ...;
multiplayerLobbyBattleRewardWidget.StartPreAnimation();
```

### EndAnimation
`public void EndAnimation()`

**用途 / Purpose:** 处理与 「end animation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyBattleRewardWidget 实例
MultiplayerLobbyBattleRewardWidget multiplayerLobbyBattleRewardWidget = ...;
multiplayerLobbyBattleRewardWidget.EndAnimation();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyBattleRewardWidget widget = ...;
```

## 参见

- [本区域目录](../)