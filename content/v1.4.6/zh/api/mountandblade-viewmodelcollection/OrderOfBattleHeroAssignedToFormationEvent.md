---
title: "OrderOfBattleHeroAssignedToFormationEvent"
description: "OrderOfBattleHeroAssignedToFormationEvent：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 EventBase；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroAssignedToFormationEvent.cs。"
---
# OrderOfBattleHeroAssignedToFormationEvent

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleHeroAssignedToFormationEvent : EventBase`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroAssignedToFormationEvent.cs`

## 概述

OrderOfBattleHeroAssignedToFormationEvent 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroAssignedToFormationEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 OrderOfBattleHeroAssignedToFormationEvent → EventBase。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleHeroAssignedToFormationEvent 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle），继承链 OrderOfBattleHeroAssignedToFormationEvent → EventBase。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 EventBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroAssignedToFormationEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AssignedHero` | `public Agent AssignedHero` | 属性 |
| `AssignedFormation` | `public Formation AssignedFormation` | 属性 |
| `OrderOfBattleHeroAssignedToFormationEvent` | `public OrderOfBattleHeroAssignedToFormationEvent(Agent assignedHero, Formation assignedFormation)` | 构造函数 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [同命名空间 OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [同命名空间 OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)
