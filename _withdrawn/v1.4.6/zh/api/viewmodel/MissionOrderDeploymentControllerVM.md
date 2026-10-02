---
title: "MissionOrderDeploymentControllerVM"
description: "MissionOrderDeploymentControllerVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 ViewModel；公开成员 22 个（方法 14、属性 5、字段 2）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionOrderDeploymentControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionOrderDeploymentControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionOrderDeploymentControllerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionOrderDeploymentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 22 个：14 方法、5 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionOrderDeploymentControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 MissionOrderDeploymentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 14/22，属性 5/22），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderController` | `public OrderController OrderController` | 属性 |
| `SetMissionParameters` | `public void SetMissionParameters(Camera deploymentCamera, List<DeploymentPoint>deploymentPoints)` | 方法 |
| `SetCallbacks` | `public void SetCallbacks(MissionOrderCallbacks callbacks)` | 方法 |
| `MissionOrderDeploymentControllerVM` | `public MissionOrderDeploymentControllerVM(MissionOrderVM missionOrder)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnRefreshSelectedDeploymentPoint` | `public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)` | 方法 |
| `OnEntityHover` | `public void OnEntityHover(WeakGameEntity hoveredEntity)` | 方法 |
| `OnEntityHover` | `public void OnEntityHover(DeploymentPoint deploymentPoint)` | 方法 |
| `OnEntitySelect` | `public void OnEntitySelect(WeakGameEntity selectedEntity)` | 方法 |
| `RefreshSelectedDeploymentPoint` | `public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)` | 方法 |
| `ExecuteCancelSelectedDeploymentPoint` | `public void ExecuteCancelSelectedDeploymentPoint()` | 方法 |
| `ExecuteBeginMission` | `public void ExecuteBeginMission()` | 方法 |
| `ExecuteAutoDeploy` | `public void ExecuteAutoDeploy()` | 方法 |
| `ExecuteDeployPlayerSide` | `public void ExecuteDeployPlayerSide()` | 方法 |
| `FinalizeDeployment` | `public void FinalizeDeployment()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `MBBindingList` | `public MBBindingList<OrderSiegeMachineVM>SiegeMachineList` | 属性 |
| `MBBindingList` | `public MBBindingList<DeploymentSiegeMachineVM>DeploymentTargets` | 属性 |
| `IsSiegeDeploymentListActive` | `public bool IsSiegeDeploymentListActive` | 属性 |
| `MBBindingList` | `public MBBindingList<DeploymentSiegeMachineVM>SiegeDeploymentList` | 属性 |
| `_entityHiglightColor` | `public const uint _entityHiglightColor` | 字段 |
| `_entitySelectedColor` | `public const uint _entitySelectedColor` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
- [同命名空间 MissionOrderVM](../MissionOrderVM/)
