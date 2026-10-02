---
title: "BladeData"
description: "BladeData：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 14 个（方法 1、属性 12、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/BladeData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BladeData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class BladeData : MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

BladeData 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BladeData.cs。它是一个 public 类（sealed），实现/继承 MBObjectBase，继承链为 BladeData → MBObjectBase。public/protected 成员共 14 个：1 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BladeData 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 BladeData → MBObjectBase。成员构成以属性为主（属性 12/14，方法 1/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BladeData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ThrustDamageType` | `public DamageTypes ThrustDamageType` | 属性 |
| `ThrustDamageFactor` | `public float ThrustDamageFactor` | 属性 |
| `SwingDamageType` | `public DamageTypes SwingDamageType` | 属性 |
| `SwingDamageFactor` | `public float SwingDamageFactor` | 属性 |
| `BladeLength` | `public float BladeLength` | 属性 |
| `BladeWidth` | `public float BladeWidth` | 属性 |
| `StackAmount` | `public short StackAmount` | 属性 |
| `PhysicsMaterial` | `public string PhysicsMaterial` | 属性 |
| `BodyName` | `public string BodyName` | 属性 |
| `HolsterMeshName` | `public string HolsterMeshName` | 属性 |
| `HolsterBodyName` | `public string HolsterBodyName` | 属性 |
| `HolsterMeshLength` | `public float HolsterMeshLength` | 属性 |
| `BladeData` | `public BladeData(CraftingPiece.PieceTypes pieceType, float bladeLength)` | 构造函数 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
