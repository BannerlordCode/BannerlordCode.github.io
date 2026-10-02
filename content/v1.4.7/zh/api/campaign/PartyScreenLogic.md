---
title: "PartyScreenLogic"
description: "TaleWorlds.CampaignSystem.Party.PartyScreenLogic —— 命名空间 TaleWorlds.CampaignSystem.Party 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# PartyScreenLogic

**Namespace:** `TaleWorlds.CampaignSystem.Party`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PartyScreenLogic`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## 概述

`PartyScreenLogic` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.Party` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`（第 19 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 224 项，其中 27 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public PartyScreenLogic.PartyCommandCode Code { get; private set; }` — 属性，get/set，类型 PartyScreenLogic.PartyCommandCode
- `public PartyScreenLogic.PartyRosterSide RosterSide { get; private set; }` — 属性，get/set，类型 PartyScreenLogic.PartyRosterSide
- `public CharacterObject Character { get; private set; }` — 属性，get/set，类型 CharacterObject
- `public int TotalNumber { get; private set; }` — 属性，get/set，类型 int
- `public int WoundedNumber { get; private set; }` — 属性，get/set，类型 int
- `public int Index { get; private set; }` — 属性，get/set，类型 int
- `public int UpgradeTarget { get; private set; }` — 属性，get/set，类型 int
- `public PartyScreenLogic.TroopType Type { get; private set; }` — 属性，get/set，类型 PartyScreenLogic.TroopType
- `public PartyScreenLogic.TroopSortType SortType { get; private set; }` — 属性，get/set，类型 PartyScreenLogic.TroopSortType
- `public bool IsSortAscending { get; private set; }` — 属性，get/set，类型 bool
- `public void FillForTransferTroop(PartyScreenLogic.PartyRosterSide fromSide, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)` — 方法，6 个参数，返回 void
- `public void FillForShiftTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int targetIndex)` — 方法，4 个参数，返回 void
- `public void FillForTransferTroopToLeaderSlot(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)` — 方法，6 个参数，返回 void
- `public void FillForTransferPartyLeaderTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber)` — 方法，4 个参数，返回 void
- `public void FillForUpgradeTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int number, int upgradeTargetType, int index)` — 方法，6 个参数，返回 void
- `public void FillForRecruitTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int number, int index)` — 方法，5 个参数，返回 void
- `public void FillForExecuteTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character)` — 方法，3 个参数，返回 void
- `public void FillForTransferAllTroops(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type)` — 方法，2 个参数，返回 void
- `public void FillForSortTroops(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopSortType sortType, bool isAscending)` — 方法，3 个参数，返回 void
- `public void SetIsAscending(bool isAscending)` — 方法，1 个参数，返回 void
- `public int Compare(TroopRosterElement x, TroopRosterElement y)` — 方法，2 个参数，返回 int
- `protected abstract int CompareTroops(TroopRosterElement x, TroopRosterElement y);` — 方法，2 个参数，返回 int
- `protected override int CompareTroops(TroopRosterElement x, TroopRosterElement y)` — 方法，2 个参数，返回 int
- `protected override int CompareTroops(TroopRosterElement x, TroopRosterElement y)` — 方法，2 个参数，返回 int
- `protected override int CompareTroops(TroopRosterElement x, TroopRosterElement y)` — 方法，2 个参数，返回 int
- `protected override int CompareTroops(TroopRosterElement x, TroopRosterElement y)` — 方法，2 个参数，返回 int
- `protected override int CompareTroops(TroopRosterElement x, TroopRosterElement y)` — 方法，2 个参数，返回 int


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 27 条成员记录全部来自 `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class PartyScreenLogic` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
