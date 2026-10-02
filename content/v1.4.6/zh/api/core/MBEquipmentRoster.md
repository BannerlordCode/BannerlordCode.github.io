---
title: "MBEquipmentRoster"
description: "MBEquipmentRoster：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 11 个（方法 6、属性 4、字段 1）。源文件 TaleWorlds.Core/MBEquipmentRoster.cs。"
---
# MBEquipmentRoster

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBEquipmentRoster : MBObjectBase`
**File:** `TaleWorlds.Core/MBEquipmentRoster.cs`

## 概述

MBEquipmentRoster 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBEquipmentRoster.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 MBEquipmentRoster → MBObjectBase。public/protected 成员共 11 个：6 方法、4 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBEquipmentRoster 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MBEquipmentRoster → MBObjectBase。成员构成以方法为主（方法 6/11，属性 4/11），对外主要以操作入口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBEquipmentRoster.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EquipmentCulture` | `public BasicCultureObject EquipmentCulture` | 属性 |
| `EquipmentCategories` | `public EquipmentCategories EquipmentCategories` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<Equipment>AllEquipments` | 属性 |
| `DefaultEquipment` | `public Equipment DefaultEquipment` | 属性 |
| `Init` | `public void Init(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `AddEquipmentRoster` | `public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)` | 方法 |
| `AddOverriddenEquipments` | `public void AddOverriddenEquipments(MBObjectManager objectManager, List<XmlNode>overridenEquipmentSlots)` | 方法 |
| `OrderEquipments` | `public void OrderEquipments()` | 方法 |
| `InitializeDefaultEquipment` | `public void InitializeDefaultEquipment(string equipmentName)` | 方法 |
| `EmptyEquipment` | `public static readonly Equipment EmptyEquipment` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
