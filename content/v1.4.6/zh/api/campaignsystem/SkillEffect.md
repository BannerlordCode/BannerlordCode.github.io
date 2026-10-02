---
title: "SkillEffect"
description: "SkillEffect：TaleWorlds.CampaignSystem 的 public 类，继承 PropertyObject；公开成员 11 个（方法 2、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem/SkillEffect.cs。"
---
# SkillEffect

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class SkillEffect : PropertyObject`
**File:** `TaleWorlds.CampaignSystem/SkillEffect.cs`

## 概述

SkillEffect 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SkillEffect.cs。它是一个 public 类（sealed），实现/继承 PropertyObject，继承链为 SkillEffect → PropertyObject。public/protected 成员共 11 个：2 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SkillEffect 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 SkillEffect → PropertyObject。成员构成以属性为主（属性 8/11，方法 2/11），对外主要以状态读取接口暴露。继承链上的 PropertyObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SkillEffect.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<SkillEffect>All` | 属性 |
| `Bonus` | `public float Bonus` | 属性 |
| `BaseValue` | `public float BaseValue` | 属性 |
| `LimitMin` | `public float LimitMin` | 属性 |
| `LimitMax` | `public float LimitMax` | 属性 |
| `Role` | `public PartyRole Role` | 属性 |
| `IncrementType` | `public EffectIncrementType IncrementType` | 属性 |
| `EffectedSkill` | `public SkillObject EffectedSkill` | 属性 |
| `SkillEffect` | `public SkillEffect(string stringId) : base(stringId)` | 构造函数 |
| `Initialize` | `public void Initialize(TextObject description, SkillObject effectedSkill, PartyRole role, float bonus, EffectIncrementType incrementType, float baseValue = 0f, float limitMin = -3.4028235E+38f, float limitMax = 3.4028235E+38f)` | 方法 |
| `GetSkillEffectValue` | `public float GetSkillEffectValue(int skillLevel)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
