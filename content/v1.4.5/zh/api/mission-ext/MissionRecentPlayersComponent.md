---
title: "MissionRecentPlayersComponent"
description: "MissionRecentPlayersComponent 的自动生成类参考。"
---
# MissionRecentPlayersComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecentPlayersComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionRecentPlayersComponent.cs`

## 概述

`MissionRecentPlayersComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionRecentPlayersComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionRecentPlayersComponent 实例
MissionRecentPlayersComponent missionRecentPlayersComponent = ...;
missionRecentPlayersComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionRecentPlayersComponent 实例
MissionRecentPlayersComponent missionRecentPlayersComponent = ...;
missionRecentPlayersComponent.OnRemoveBehavior();
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionRecentPlayersComponent>();
```

## 参见

- [本区域目录](../)