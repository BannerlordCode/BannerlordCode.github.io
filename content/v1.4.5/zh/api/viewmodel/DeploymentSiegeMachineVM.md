---
title: "DeploymentSiegeMachineVM"
description: "DeploymentSiegeMachineVM 的自动生成类参考。"
---
# DeploymentSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/DeploymentSiegeMachineVM.cs`

## 概述

`DeploymentSiegeMachineVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; set; }` |
| `Type` | `public int Type { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `BreachedText` | `public string BreachedText { get; set; }` |
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsInFront` | `public bool IsInFront { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshValues();
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.Update();
```

### CalculatePosition
`public void CalculatePosition()`

**用途 / Purpose:** 计算「position」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.CalculatePosition();
```

### RefreshPosition
`public void RefreshPosition()`

**用途 / Purpose:** 使 「position」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshPosition();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 「action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.ExecuteAction();
```

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**用途 / Purpose:** 执行 「focus begin」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.ExecuteFocusBegin();
```

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**用途 / Purpose:** 执行 「focus end」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.ExecuteFocusEnd();
```

### RefreshWithDeployedWeapon
`public void RefreshWithDeployedWeapon()`

**用途 / Purpose:** 使 「with deployed weapon」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 DeploymentSiegeMachineVM 实例
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshWithDeployedWeapon();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshValues();
```

## 参见

- [本区域目录](../)