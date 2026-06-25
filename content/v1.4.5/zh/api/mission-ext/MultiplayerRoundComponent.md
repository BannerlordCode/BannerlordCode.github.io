---
title: "MultiplayerRoundComponent"
description: "MultiplayerRoundComponent 的自动生成类参考。"
---
# MultiplayerRoundComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundComponent : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs`

## 概述

`MultiplayerRoundComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerRoundComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime { get; }` |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState { get; }` |
| `RoundCount` | `public int RoundCount { get; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get; }` |
| `RoundEndReason` | `public RoundEndReason RoundEndReason { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerRoundComponent 实例
MultiplayerRoundComponent multiplayerRoundComponent = ...;
multiplayerRoundComponent.AfterStart();
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerRoundComponent>();
```

## 参见

- [本区域目录](../)