---
title: "BasicCultureObject"
description: "BasicCultureObject：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 16 个（方法 2、属性 14、字段 0）。源文件 TaleWorlds.Core/BasicCultureObject.cs。"
---
# BasicCultureObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicCultureObject : MBObjectBase`
**File:** `TaleWorlds.Core/BasicCultureObject.cs`

## 概述

BasicCultureObject 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BasicCultureObject.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 BasicCultureObject → MBObjectBase。public/protected 成员共 16 个：2 方法、14 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BasicCultureObject 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BasicCultureObject → MBObjectBase。成员构成以属性为主（属性 14/16，方法 2/16），对外主要以状态读取接口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BasicCultureObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | 属性 |
| `IsMainCulture` | `public bool IsMainCulture` | 属性 |
| `IsBandit` | `public bool IsBandit` | 属性 |
| `CanHaveSettlement` | `public bool CanHaveSettlement` | 属性 |
| `Color` | `public uint Color` | 属性 |
| `Color2` | `public uint Color2` | 属性 |
| `ClothAlternativeColor` | `public uint ClothAlternativeColor` | 属性 |
| `ClothAlternativeColor2` | `public uint ClothAlternativeColor2` | 属性 |
| `BackgroundColor1` | `public uint BackgroundColor1` | 属性 |
| `ForegroundColor1` | `public uint ForegroundColor1` | 属性 |
| `BackgroundColor2` | `public uint BackgroundColor2` | 属性 |
| `ForegroundColor2` | `public uint ForegroundColor2` | 属性 |
| `EncounterBackgroundMesh` | `public string EncounterBackgroundMesh` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `ToString` | `public override string ToString()` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
