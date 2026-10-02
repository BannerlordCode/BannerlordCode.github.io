---
title: "CharacterCode"
description: "CharacterCode：TaleWorlds.Core 的 public 类；公开成员 20 个（方法 7、属性 11、字段 2）。canonical 桶 core-extra。源文件 TaleWorlds.Core/CharacterCode.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCode

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class CharacterCode`
**File:** `TaleWorlds.Core/CharacterCode.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

CharacterCode 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/CharacterCode.cs。它是一个 public 类，继承链为 CharacterCode。public/protected 成员共 20 个：7 方法、11 属性、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCode 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 CharacterCode。成员构成以属性为主（属性 11/20，方法 7/20），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/CharacterCode.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `EquipmentCode` | `public string EquipmentCode` | 属性 |
| `Code` | `public string Code` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `IsHero` | `public bool IsHero` | 属性 |
| `FaceDirtAmount` | `public float FaceDirtAmount` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `FormationClass` | `public FormationClass FormationClass` | 属性 |
| `Color1` | `public uint Color1` | 属性 |
| `Color2` | `public uint Color2` | 属性 |
| `Race` | `public int Race` | 属性 |
| `CalculateEquipment` | `public Equipment CalculateEquipment()` | 方法 |
| `CreateFrom` | `public static CharacterCode CreateFrom(BasicCharacterObject character)` | 方法 |
| `CreateFrom` | `public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)` | 方法 |
| `CreateFrom` | `public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)` | 方法 |
| `CreateNewCodeString` | `public string CreateNewCodeString()` | 方法 |
| `CreateEmpty` | `public static CharacterCode CreateEmpty()` | 方法 |
| `CreateFrom` | `public static CharacterCode CreateFrom(string code)` | 方法 |
| `SpecialCodeSeparator` | `public const string SpecialCodeSeparator` | 字段 |
| `SpecialCodeSeparatorLength` | `public const int SpecialCodeSeparatorLength` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
