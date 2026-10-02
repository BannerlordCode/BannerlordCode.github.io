---
title: "ShipSlot"
description: "ShipSlot：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 8 个（方法 4、属性 3、字段 0）。源文件 TaleWorlds.Core/ShipSlot.cs。"
---
# ShipSlot

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ShipSlot : MBObjectBase`
**File:** `TaleWorlds.Core/ShipSlot.cs`

## 概述

ShipSlot 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ShipSlot.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 ShipSlot → MBObjectBase。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ShipSlot 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 ShipSlot → MBObjectBase。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ShipSlot.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TypeId` | `public string TypeId` | 属性 |
| `MainPrefabId` | `public string MainPrefabId` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipUpgradePiece>MatchingPieces` | 属性 |
| `ShipSlot` | `public ShipSlot()` | 构造函数 |
| `AfterRegister` | `public override void AfterRegister()` | 方法 |
| `AddMatchingPiece` | `public void AddMatchingPiece(ShipUpgradePiece upgradePiece)` | 方法 |
| `GetSlotTypeName` | `public TextObject GetSlotTypeName()` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
