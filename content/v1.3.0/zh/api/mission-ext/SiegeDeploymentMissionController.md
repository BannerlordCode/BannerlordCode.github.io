---
title: "SiegeDeploymentMissionController"
description: "SiegeDeploymentMissionController 的自动生成类参考。"
---
# SiegeDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`

## 概述

`SiegeDeploymentMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SiegeDeploymentMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentMissionController 实例
SiegeDeploymentMissionController siegeDeploymentMissionController = ...;
siegeDeploymentMissionController.OnBehaviorInitialize();
```

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege missiles 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentMissionController 实例
SiegeDeploymentMissionController siegeDeploymentMissionController = ...;
var result = siegeDeploymentMissionController.GetSiegeMissiles();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeDeploymentMissionController>();
```

## 参见

- [本区域目录](../)