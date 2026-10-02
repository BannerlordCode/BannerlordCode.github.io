---
title: "CustomPartyComponent"
description: "TaleWorlds.CampaignSystem.Party.PartyComponents.CustomPartyComponent —— 命名空间 TaleWorlds.CampaignSystem.Party.PartyComponents 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# CustomPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CustomPartyComponent : PartyComponent`  
**Base:** `PartyComponent`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs`

## 概述

`CustomPartyComponent` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.Party.PartyComponents` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs`（第 13 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `PartyComponent`；解析到的成员共 55 项，其中 10 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public InitializationArgs(CampaignVec2 position, float spawnRadius, Clan clan, PartyTemplateObject partyTemplate)` — 方法，4 个参数，返回 I
- `public InitializationArgs(CampaignVec2 position, float spawnRadius, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster)` — 方法，5 个参数，返回 I
- `public void InitializeCustomPartyPropertiesWithPartyTemplate(MobileParty mobileParty)` — 方法，1 个参数，返回 void
- `public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)` — 方法，1 个参数，返回 void
- `public readonly CampaignVec2 Position;` — 字段，类型 CampaignVec2
- `public readonly float SpawnRadius;` — 字段，类型 float
- `public readonly Clan Clan;` — 字段，类型 Clan
- `public readonly TroopRoster TroopRoster;` — 字段，类型 TroopRoster
- `public readonly TroopRoster PrisonerRoster;` — 字段，类型 TroopRoster
- `public readonly PartyTemplateObject PartyTemplate;` — 字段，类型 PartyTemplateObject


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 10 条成员记录全部来自 `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class CustomPartyComponent : PartyComponent` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [TroopRoster（成员类型）](../TroopRoster)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
