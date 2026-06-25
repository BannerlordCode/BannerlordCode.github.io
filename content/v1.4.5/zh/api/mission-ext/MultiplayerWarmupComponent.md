---
title: "MultiplayerWarmupComponent"
description: "MultiplayerWarmupComponent 的自动生成类参考。"
---
# MultiplayerWarmupComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`

## 概述

`MultiplayerWarmupComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerWarmupComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.AfterStart();
```

### CheckForWarmupProgressEnd
`public bool CheckForWarmupProgressEnd()`

**用途 / Purpose:** 检查「for warmup progress end」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
var result = multiplayerWarmupComponent.CheckForWarmupProgressEnd();
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 在 「pre display mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.OnPreDisplayMissionTick(0);
```

### EndWarmupProgress
`public void EndWarmupProgress()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.EndWarmupProgress();
```

### CanMatchStartAfterWarmup
`public bool CanMatchStartAfterWarmup()`

**用途 / Purpose:** 检查当前对象是否满足 「match start after warmup」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
var result = multiplayerWarmupComponent.CanMatchStartAfterWarmup();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerWarmupComponent 实例
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.OnRemoveBehavior();
```

### CommandEndWarmup
`public static string CommandEndWarmup(List<string> strings)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MultiplayerWarmupComponent.CommandEndWarmup(strings);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerWarmupComponent>();
```

## 参见

- [本区域目录](../)