---
title: "BodyProperties"
description: "BodyProperties：TaleWorlds.Core 的 public 结构体；公开成员 24 个（方法 9、属性 14、字段 0）。源文件 TaleWorlds.Core/BodyProperties.cs。"
---
# BodyProperties

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct BodyProperties`
**File:** `TaleWorlds.Core/BodyProperties.cs`

## 概述

BodyProperties 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BodyProperties.cs。它是一个 public 结构体，继承链为 BodyProperties。public/protected 成员共 24 个：9 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BodyProperties 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BodyProperties。成员构成以属性为主（属性 14/24，方法 9/24），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BodyProperties.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StaticProperties` | `public StaticBodyProperties StaticProperties` | 属性 |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties` | 属性 |
| `Age` | `public float Age` | 属性 |
| `Weight` | `public float Weight` | 属性 |
| `Build` | `public float Build` | 属性 |
| `KeyPart1` | `public ulong KeyPart1` | 属性 |
| `KeyPart2` | `public ulong KeyPart2` | 属性 |
| `KeyPart3` | `public ulong KeyPart3` | 属性 |
| `KeyPart4` | `public ulong KeyPart4` | 属性 |
| `KeyPart5` | `public ulong KeyPart5` | 属性 |
| `KeyPart6` | `public ulong KeyPart6` | 属性 |
| `KeyPart7` | `public ulong KeyPart7` | 属性 |
| `KeyPart8` | `public ulong KeyPart8` | 属性 |
| `BodyProperties` | `public BodyProperties(DynamicBodyProperties dynamicBodyProperties, StaticBodyProperties staticBodyProperties)` | 构造函数 |
| `FromXmlNode` | `public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)` | 方法 |
| `FromString` | `public static bool FromString(string keyValue, out BodyProperties bodyProperties)` | 方法 |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `ToString` | `public override string ToString()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `ClampForMultiplayer` | `public BodyProperties ClampForMultiplayer()` | 方法 |
| `Default` | `public static BodyProperties Default` | 属性 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
