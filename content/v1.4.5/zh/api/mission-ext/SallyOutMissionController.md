---
title: "SallyOutMissionController"
description: "SallyOutMissionController 的自动生成类参考。"
---
# SallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## 概述

`SallyOutMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SallyOutMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionController 实例
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionController 实例
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionController 实例
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.OnMissionTick(0);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionController 实例
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.OnDeploymentFinished();
```

### GetBesiegerSiegeEngines
`public static MBReadOnlyList<SiegeWeapon> GetBesiegerSiegeEngines()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 besieger siege engines 的结果。

```csharp
// 静态调用，不需要实例
SallyOutMissionController.GetBesiegerSiegeEngines();
```

### DisableSiegeEngines
`public static void DisableSiegeEngines()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableSiegeEngines 对应的操作。

```csharp
// 静态调用，不需要实例
SallyOutMissionController.DisableSiegeEngines();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SallyOutMissionController instance = ...;
```

## 参见

- [本区域目录](../)