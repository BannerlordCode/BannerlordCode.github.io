---
title: "MBBodyProperty"
description: "MBBodyProperty：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 10 个（方法 3、属性 5、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/MBBodyProperty.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBBodyProperty

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBBodyProperty : MBObjectBase`
**File:** `TaleWorlds.Core/MBBodyProperty.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

MBBodyProperty 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBBodyProperty.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 MBBodyProperty → MBObjectBase。public/protected 成员共 10 个：3 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBBodyProperty 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 MBBodyProperty → MBObjectBase。成员构成以属性为主（属性 5/10，方法 3/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBBodyProperty.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
