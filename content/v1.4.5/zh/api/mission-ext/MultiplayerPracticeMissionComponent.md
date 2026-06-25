---
title: "MultiplayerPracticeMissionComponent"
description: "MultiplayerPracticeMissionComponent 的自动生成类参考。"
---
# MultiplayerPracticeMissionComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPracticeMissionComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Missions/MultiplayerPracticeMissionComponent.cs`

## 概述

`MultiplayerPracticeMissionComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerPracticeMissionComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerPracticeMissionComponent 实例
MultiplayerPracticeMissionComponent multiplayerPracticeMissionComponent = ...;
multiplayerPracticeMissionComponent.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPracticeMissionComponent 实例
MultiplayerPracticeMissionComponent multiplayerPracticeMissionComponent = ...;
multiplayerPracticeMissionComponent.OnMissionTick(0);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerPracticeMissionComponent>();
```

## 参见

- [本区域目录](../)