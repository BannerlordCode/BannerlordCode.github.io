---
title: "MBBodyProperty"
description: "MBBodyProperty：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 10 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.Core/MBBodyProperty.cs。"
---
# MBBodyProperty

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBBodyProperty : MBObjectBase`
**File:** `TaleWorlds.Core/MBBodyProperty.cs`

## 概述

MBBodyProperty 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBBodyProperty.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 MBBodyProperty → MBObjectBase。public/protected 成员共 10 个：3 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBBodyProperty 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MBBodyProperty → MBObjectBase。成员构成以属性为主（属性 5/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBBodyProperty.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HairTags` | `public string HairTags` | 属性 |
| `BeardTags` | `public string BeardTags` | 属性 |
| `TattooTags` | `public string TattooTags` | 属性 |
| `BodyPropertyMin` | `public BodyProperties BodyPropertyMin` | 属性 |
| `BodyPropertyMax` | `public BodyProperties BodyPropertyMax` | 属性 |
| `MBBodyProperty` | `public MBBodyProperty(string stringId) : base(stringId)` | 构造函数 |
| `MBBodyProperty` | `public MBBodyProperty()` | 构造函数 |
| `CreateFrom` | `public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)` | 方法 |
| `Init` | `public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
