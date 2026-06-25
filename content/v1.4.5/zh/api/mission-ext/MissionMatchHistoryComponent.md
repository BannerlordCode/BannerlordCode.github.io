---
title: "MissionMatchHistoryComponent"
description: "MissionMatchHistoryComponent 的自动生成类参考。"
---
# MissionMatchHistoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMatchHistoryComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionMatchHistoryComponent.cs`

## 概述

`MissionMatchHistoryComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionMatchHistoryComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateIfConditionsAreMet
`public static MissionMatchHistoryComponent CreateIfConditionsAreMet()`

**用途 / Purpose:** 构建一个新的 「if conditions are met」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MissionMatchHistoryComponent.CreateIfConditionsAreMet();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMatchHistoryComponent 实例
MissionMatchHistoryComponent missionMatchHistoryComponent = ...;
missionMatchHistoryComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMatchHistoryComponent 实例
MissionMatchHistoryComponent missionMatchHistoryComponent = ...;
missionMatchHistoryComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMatchHistoryComponent 实例
MissionMatchHistoryComponent missionMatchHistoryComponent = ...;
missionMatchHistoryComponent.OnRemoveBehavior();
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionMatchHistoryComponent>();
```

## 参见

- [本区域目录](../)