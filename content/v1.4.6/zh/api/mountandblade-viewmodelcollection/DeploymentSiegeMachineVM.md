---
title: "DeploymentSiegeMachineVM"
description: "DeploymentSiegeMachineVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 8、属性 10、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs。"
---
# DeploymentSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs`

## 概述

DeploymentSiegeMachineVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 DeploymentSiegeMachineVM → ViewModel。public/protected 成员共 19 个：8 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DeploymentSiegeMachineVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order），继承链 DeploymentSiegeMachineVM → ViewModel。成员构成以属性为主（属性 10/19，方法 8/19），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint` | 属性 |
| `DeploymentSiegeMachineVM` | `public DeploymentSiegeMachineVM(DeploymentPoint selectedDeploymentPoint, SiegeWeapon siegeMachine, Camera deploymentCamera, Action<DeploymentSiegeMachineVM>onSelectSiegeMachine, Action<DeploymentPoint>onHoverSiegeMachine, bool isSelected)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `CalculatePosition` | `public void CalculatePosition()` | 方法 |
| `RefreshPosition` | `public void RefreshPosition()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `ExecuteFocusBegin` | `public void ExecuteFocusBegin()` | 方法 |
| `ExecuteFocusEnd` | `public void ExecuteFocusEnd()` | 方法 |
| `RefreshWithDeployedWeapon` | `public void RefreshWithDeployedWeapon()` | 方法 |
| `Type` | `public int Type` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | 属性 |
| `MachineClass` | `public string MachineClass` | 属性 |
| `BreachedText` | `public string BreachedText` | 属性 |
| `RemainingCount` | `public int RemainingCount` | 属性 |
| `IsInside` | `public bool IsInside` | 属性 |
| `IsInFront` | `public bool IsInFront` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
- [同命名空间 MissionOrderVM](../MissionOrderVM)
