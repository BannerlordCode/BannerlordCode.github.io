---
title: "CharacterCreationCampaignBehavior"
description: "TaleWorlds.CampaignSystem.CampaignBehaviors.CharacterCreationCampaignBehavior —— 命名空间 TaleWorlds.CampaignSystem.CampaignBehaviors 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# CharacterCreationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`  
**Base:** `CampaignBehaviorBase, ICharacterCreationContentHandler`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## 概述

`CharacterCreationCampaignBehavior` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`（第 13 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `CampaignBehaviorBase, ICharacterCreationContentHandler`；解析到的成员共 1247 项，其中 20 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public static bool IsUrbanOccupation(string occupation)` — 方法，1 个参数，返回 bool
- `public const string Retainer = "retainer";` — 字段，类型 string
- `public const string Bard = "bard";` — 字段，类型 string
- `public const string Hunter = "hunter";` — 字段，类型 string
- `public const string Farmer = "farmer";` — 字段，类型 string
- `public const string Herder = "herder";` — 字段，类型 string
- `public const string Healer = "healer";` — 字段，类型 string
- `public const string Mercenary = "mercenary";` — 字段，类型 string
- `public const string Infantry = "infantry";` — 字段，类型 string
- `public const string Skirmisher = "skirmisher";` — 字段，类型 string
- `public const string Kern = "kern";` — 字段，类型 string
- `public const string Guard = "guard";` — 字段，类型 string
- `public const string RetainerUrban = "retainer_urban";` — 字段，类型 string
- `public const string MercenaryUrban = "mercenary_urban";` — 字段，类型 string
- `public const string MerchantUrban = "merchant_urban";` — 字段，类型 string
- `public const string VagabondUrban = "vagabond_urban";` — 字段，类型 string
- `public const string ArtisanUrban = "artisan_urban";` — 字段，类型 string
- `public const string PhysicianUrban = "physician_urban";` — 字段，类型 string
- `public const string HealerUrban = "healer_urban";` — 字段，类型 string
- `public const string BardUrban = "bard_urban";` — 字段，类型 string


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 20 条成员记录全部来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign-ext` API](../)
- [AIMoveToNearestLandBehavior（同命名空间）](../AIMoveToNearestLandBehavior)
- [AgeModel（同命名空间）](../AgeModel)
- [AiArmyMemberBehavior（同命名空间）](../AiArmyMemberBehavior)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
