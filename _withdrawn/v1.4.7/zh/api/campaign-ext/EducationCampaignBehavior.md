---
title: "EducationCampaignBehavior"
description: "TaleWorlds.CampaignSystem.CampaignBehaviors.EducationCampaignBehavior —— 命名空间 TaleWorlds.CampaignSystem.CampaignBehaviors 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# EducationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`  
**Base:** `CampaignBehaviorBase, IEducationLogic`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`

## 概述

`EducationCampaignBehavior` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`（第 16 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `CampaignBehaviorBase, IEducationLogic`；解析到的成员共 693 项，其中 46 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public void OnConsequence(Hero child)` — 方法，1 个参数，返回 void
- `public EducationOption(TextObject title, TextObject description, TextObject effect, EducationCampaignBehavior.EducationOption.EducationOptionConditionDelegate condition, EducationCampaignBehavior.EducationOption.EducationOptionConsequenceDelegate consequence, CharacterAttribute[] attributes, SkillObject[] skills, EducationCampaignBehavior.EducationCharacterProperties childProperties, EducationCampaignBehavior.EducationCharacterProperties specialCharacterProperties = default(EducationCampaignBehavior.EducationCharacterProperties))` — 方法，9 个参数，返回 E
- `public readonly EducationCampaignBehavior.EducationOption.EducationOptionConditionDelegate Condition;` — 字段，类型 EducationCampaignBehavior.EducationOption.EducationOptionConditionDelegate
- `public readonly TextObject Title;` — 字段，类型 TextObject
- `public readonly TextObject Description;` — 字段，类型 TextObject
- `public readonly TextObject Effect;` — 字段，类型 TextObject
- `public readonly CharacterAttribute[] Attributes;` — 字段，类型 CharacterAttribute[]
- `public readonly SkillObject[] Skills;` — 字段，类型 SkillObject[]
- `public readonly EducationCampaignBehavior.EducationCharacterProperties ChildProperties;` — 字段，类型 EducationCampaignBehavior.EducationCharacterProperties
- `public readonly EducationCampaignBehavior.EducationCharacterProperties SpecialCharacterProperties;` — 字段，类型 EducationCampaignBehavior.EducationCharacterProperties
- `public readonly int RandomValue;` — 字段，类型 int
- `public delegate bool EducationOptionConditionDelegate(EducationCampaignBehavior.EducationOption option, List<EducationCampaignBehavior.EducationOption> previousOptions);` — 方法，2 个参数，返回 bool
- `public delegate bool EducationOptionConsequenceDelegate(EducationCampaignBehavior.EducationOption option);` — 方法，1 个参数，返回 bool
- `public EducationStage(EducationCampaignBehavior.ChildAgeState targetAge)` — 方法，1 个参数，返回 E
- `public EducationCampaignBehavior.EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCampaignBehavior.EducationCharacterProperties childProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationCharacterProperties specialCharacterProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationPage.EducationPageConditionDelegate condition = null)` — 方法，7 个参数，返回 EducationCampaignBehavior.EducationPage
- `public EducationCampaignBehavior.EducationOption GetOption(string optionKey)` — 方法，1 个参数，返回 EducationCampaignBehavior.EducationOption
- `public EducationCampaignBehavior.EducationPage GetPage(List<string> previousOptionKeys)` — 方法，1 个参数，返回 EducationCampaignBehavior.EducationPage
- `public List<EducationCampaignBehavior.EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)` — 方法，1 个参数，返回 List<EducationCampaignBehavior.EducationOption>
- `public override string ToString()` — 方法，0 个参数，返回 string
- `public readonly EducationCampaignBehavior.ChildAgeState Target;` — 字段，类型 EducationCampaignBehavior.ChildAgeState
- `public EducationCharacterProperties(CharacterObject character, Equipment equipment, string actionId, string prefabId, bool useOffHand)` — 方法，5 个参数，返回 E
- `public EducationCharacterProperties(string actionId, string prefabId, bool useOffHand)` — 方法，3 个参数，返回 E
- `public EducationCharacterProperties(string actionId)` — 方法，1 个参数，返回 E
- `public static bool operator ==(EducationCampaignBehavior.EducationCharacterProperties a, EducationCampaignBehavior.EducationCharacterProperties b)` — 字段，类型 bool
- `public bool Equals(EducationCampaignBehavior.EducationCharacterProperties other)` — 方法，1 个参数，返回 bool
- `public override bool Equals(object obj)` — 方法，1 个参数，返回 bool
- `public override int GetHashCode()` — 方法，0 个参数，返回 int
- `public sbyte GetUsedHandBoneIndex()` — 方法，0 个参数，返回 sbyte
- `public readonly CharacterObject Character;` — 字段，类型 CharacterObject
- `public readonly Equipment Equipment;` — 字段，类型 Equipment

- 其余 16 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 46 条成员记录全部来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign-ext` API](../)
- [AIMoveToNearestLandBehavior（同命名空间）](../AIMoveToNearestLandBehavior)
- [AgeModel（同命名空间）](../AgeModel)
- [AiArmyMemberBehavior（同命名空间）](../AiArmyMemberBehavior)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
