---
title: "OrderSiegeMachineVM"
description: "OrderSiegeMachineVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 OrderSubjectVM；公开成员 11 个（方法 3、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderSiegeMachineVM : OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderSiegeMachineVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs。它是一个 public 类，实现/继承 OrderSubjectVM，继承链为 OrderSiegeMachineVM → OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：3 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderSiegeMachineVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 OrderSiegeMachineVM → OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/11，方法 3/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint` | 属性 |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon` | 属性 |
| `IsPrimarySiegeMachine` | `public bool IsPrimarySiegeMachine` | 属性 |
| `OrderSiegeMachineVM` | `public OrderSiegeMachineVM(DeploymentPoint deploymentPoint, Action<OrderSiegeMachineVM>setSelected, int keyIndex)` | 构造函数 |
| `OnSelectionStateChanged` | `protected override void OnSelectionStateChanged(bool isSelected)` | 方法 |
| `RefreshSiegeWeapon` | `public void RefreshSiegeWeapon()` | 方法 |
| `GetSiegeType` | `public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)` | 方法 |
| `MachineClass` | `public string MachineClass` | 属性 |
| `CurrentHP` | `public double CurrentHP` | 属性 |
| `IsInside` | `public bool IsInside` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 OrderSubjectVM](../OrderSubjectVM/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
