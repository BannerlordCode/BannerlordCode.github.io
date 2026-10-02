---
title: "FeatObject"
description: "FeatObject：TaleWorlds.CampaignSystem.CharacterDevelopment 的 public 类，继承 PropertyObject；公开成员 8 个（方法 1、属性 5、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FeatObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class FeatObject : PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

FeatObject 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs。它是一个 public 类（sealed），实现/继承 PropertyObject，继承链为 FeatObject → PropertyObject → MBObjectBase。public/protected 成员共 8 个：1 方法、5 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FeatObject 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment`，继承链 FeatObject → PropertyObject → MBObjectBase。成员构成以属性为主（属性 5/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<FeatObject>All` | 属性 |
| `EffectBonus` | `public float EffectBonus` | 属性 |
| `IncrementType` | `public FeatObject.AdditionType IncrementType` | 属性 |
| `IsPositive` | `public bool IsPositive` | 属性 |
| `FeatObject` | `public FeatObject(string stringId) : base(stringId)` | 构造函数 |
| `Initialize` | `public void Initialize(string name, string description, float effectBonus, bool isPositiveEffect, FeatObject.AdditionType incrementType)` | 方法 |
| `AdditionType` | `public enum AdditionType` | 属性 |
| `AdditionType` | `public enum AdditionType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PropertyObject](../../core-extra/PropertyObject/)
- [同命名空间 DefaultCulturalFeats](../DefaultCulturalFeats/)
- [同命名空间 DefaultPerks](../DefaultPerks/)
- [同命名空间 DefaultSkillLevelingManager](../DefaultSkillLevelingManager/)
- [同命名空间 DefaultTraits](../DefaultTraits/)
