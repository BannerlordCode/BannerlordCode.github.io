---
title: "ShipPhysicsReference"
description: "ShipPhysicsReference：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 9 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.Core/ShipPhysicsReference.cs。"
---
# ShipPhysicsReference

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ShipPhysicsReference : MBObjectBase`
**File:** `TaleWorlds.Core/ShipPhysicsReference.cs`

## 概述

ShipPhysicsReference 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ShipPhysicsReference.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 ShipPhysicsReference → MBObjectBase。public/protected 成员共 9 个：2 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ShipPhysicsReference 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 ShipPhysicsReference → MBObjectBase。成员构成以属性为主（属性 5/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ShipPhysicsReference.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LinearDragTerm` | `public LinearFrictionTerm LinearDragTerm` | 属性 |
| `LinearDampingTerm` | `public LinearFrictionTerm LinearDampingTerm` | 属性 |
| `ConstantLinearDampingTerm` | `public LinearFrictionTerm ConstantLinearDampingTerm` | 属性 |
| `ShipPhysicsReference` | `public ShipPhysicsReference()` | 构造函数 |
| `ShipPhysicsReference` | `public ShipPhysicsReference(string stringId) : base(stringId)` | 构造函数 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `GetDefaultWaterDensity` | `public static float GetDefaultWaterDensity()` | 方法 |
| `Default` | `public static readonly ShipPhysicsReference Default` | 属性 |
| `DefaultDebris` | `public static readonly ShipPhysicsReference DefaultDebris` | 属性 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
