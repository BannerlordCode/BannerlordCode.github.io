---
title: "MultiplayerTimerComponent"
description: "MultiplayerTimerComponent 的自动生成类参考。"
---
# MultiplayerTimerComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## 概述

`MultiplayerTimerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerTimerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTimerRunning` | `public bool IsTimerRunning { get; }` |

## 主要方法

### StartTimerAsServer
`public void StartTimerAsServer(float duration)`

**用途 / Purpose:** **用途 / Purpose:** 启动timer as server流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerTimerComponent 实例
MultiplayerTimerComponent multiplayerTimerComponent = ...;
multiplayerTimerComponent.StartTimerAsServer(0);
```

### StartTimerAsClient
`public void StartTimerAsClient(float startTime, float duration)`

**用途 / Purpose:** **用途 / Purpose:** 启动timer as client流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerTimerComponent 实例
MultiplayerTimerComponent multiplayerTimerComponent = ...;
multiplayerTimerComponent.StartTimerAsClient(0, 0);
```

### GetRemainingTime
`public float GetRemainingTime(bool isSynched)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 remaining time 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerTimerComponent 实例
MultiplayerTimerComponent multiplayerTimerComponent = ...;
var result = multiplayerTimerComponent.GetRemainingTime(false);
```

### CheckIfTimerPassed
`public bool CheckIfTimerPassed()`

**用途 / Purpose:** **用途 / Purpose:** 检查if timer passed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MultiplayerTimerComponent 实例
MultiplayerTimerComponent multiplayerTimerComponent = ...;
var result = multiplayerTimerComponent.CheckIfTimerPassed();
```

### GetCurrentTimerStartTime
`public MissionTime GetCurrentTimerStartTime()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current timer start time 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerTimerComponent 实例
MultiplayerTimerComponent multiplayerTimerComponent = ...;
var result = multiplayerTimerComponent.GetCurrentTimerStartTime();
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerTimerComponent>();
```

## 参见

- [本区域目录](../)