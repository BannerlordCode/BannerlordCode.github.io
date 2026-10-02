---
title: "WeaponDescription"
description: "WeaponDescription：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 7 个（方法 1、属性 6、字段 0）。源文件 TaleWorlds.Core/WeaponDescription.cs。"
---
# WeaponDescription

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponDescription : MBObjectBase`
**File:** `TaleWorlds.Core/WeaponDescription.cs`

## 概述

WeaponDescription 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/WeaponDescription.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 WeaponDescription → MBObjectBase。public/protected 成员共 7 个：1 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponDescription 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 WeaponDescription → MBObjectBase。成员构成以属性为主（属性 6/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/WeaponDescription.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponClass` | `public WeaponClass WeaponClass` | 属性 |
| `WeaponFlags` | `public WeaponFlags WeaponFlags` | 属性 |
| `ItemUsageFeatures` | `public string ItemUsageFeatures` | 属性 |
| `RotatedInHand` | `public bool RotatedInHand` | 属性 |
| `IsHiddenFromUI` | `public bool IsHiddenFromUI` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<CraftingPiece>AvailablePieces` | 属性 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
