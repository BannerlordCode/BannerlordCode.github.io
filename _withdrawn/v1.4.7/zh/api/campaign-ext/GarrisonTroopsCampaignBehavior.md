---
title: "GarrisonTroopsCampaignBehavior"
description: "TaleWorlds.CampaignSystem.CampaignBehaviors.GarrisonTroopsCampaignBehavior —— 命名空间 TaleWorlds.CampaignSystem.CampaignBehaviors 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# GarrisonTroopsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class GarrisonTroopsCampaignBehavior : CampaignBehaviorBase`  
**Base:** `CampaignBehaviorBase`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs`

## 概述

`GarrisonTroopsCampaignBehavior` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs`（第 19 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `CampaignBehaviorBase`；解析到的成员共 162 项，其中 21 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public List<ValueTuple<MobileParty, int>> GetTroopsToLeaveDataForArmy()` — 方法，0 个参数，返回 List<ValueTuple<MobileParty, int>>
- `public List<ValueTuple<MobileParty, int>> GetTroopsToTakeDataForArmy()` — 方法，0 个参数，返回 List<ValueTuple<MobileParty, int>>
- `public Settlement Settlement;` — 字段，类型 Settlement
- `public List<ValueTuple<MobileParty, int>> ArmyPartiesIdealPartySizes;` — 字段，类型 List<ValueTuple<MobileParty, int>>
- `public int TotalIdealPartySize;` — 字段，类型 int
- `public int TotalMenCount;` — 字段，类型 int
- `public int SettlementFinalMenCount;` — 字段，类型 int
- `public int SettlementCurrentMenCount;` — 字段，类型 int
- `public bool IsLeavingTroopsToGarrison;` — 字段，类型 bool
- `public int GetNumberOfTroopsToLeaveForParty()` — 方法，0 个参数，返回 int
- `public int GetNumberOfTroopsToTakeForParty()` — 方法，0 个参数，返回 int
- `public Settlement Settlement;` — 字段，类型 Settlement
- `public MobileParty MobileParty;` — 字段，类型 MobileParty
- `public int PartyIdealPartySize;` — 字段，类型 int
- `public int SettlementIdealPartySize;` — 字段，类型 int
- `public int TotalIdealPartySize;` — 字段，类型 int
- `public int TotalMenCount;` — 字段，类型 int
- `public int PartyCurrentMenCount;` — 字段，类型 int
- `public int SettlementFinalMenCount;` — 字段，类型 int
- `public int SettlementCurrentMenCount;` — 字段，类型 int
- `public bool IsLeavingTroopsToGarrison;` — 字段，类型 bool


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 21 条成员记录全部来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class GarrisonTroopsCampaignBehavior : CampaignBehaviorBase` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign-ext` API](../)
- [CampaignBehaviorBase（基类）](../../campaign/CampaignBehaviorBase)
- [MobileParty（成员类型）](../../campaign/MobileParty)
- [AIMoveToNearestLandBehavior（同命名空间）](../AIMoveToNearestLandBehavior)
- [AgeModel（同命名空间）](../AgeModel)
- [AiArmyMemberBehavior（同命名空间）](../AiArmyMemberBehavior)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
