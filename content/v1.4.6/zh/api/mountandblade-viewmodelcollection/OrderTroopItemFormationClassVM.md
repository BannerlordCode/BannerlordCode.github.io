---
title: "OrderTroopItemFormationClassVM"
description: "OrderTroopItemFormationClassVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 4 个（方法 1、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs。"
---
# OrderTroopItemFormationClassVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderTroopItemFormationClassVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs`

## 概述

OrderTroopItemFormationClassVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OrderTroopItemFormationClassVM → ViewModel。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderTroopItemFormationClassVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order），继承链 OrderTroopItemFormationClassVM → ViewModel。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderTroopItemFormationClassVM` | `public OrderTroopItemFormationClassVM(Formation formation, FormationClass formationClass)` | 构造函数 |
| `UpdateTroopCount` | `public void UpdateTroopCount()` | 方法 |
| `FormationClassValue` | `public int FormationClassValue` | 属性 |
| `TroopCount` | `public int TroopCount` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
