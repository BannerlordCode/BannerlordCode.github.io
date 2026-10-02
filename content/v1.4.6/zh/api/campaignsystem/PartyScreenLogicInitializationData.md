---
title: "PartyScreenLogicInitializationData"
description: "PartyScreenLogicInitializationData：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs。"
---
# PartyScreenLogicInitializationData

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct PartyScreenLogicInitializationData`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs`

## 概述

PartyScreenLogicInitializationData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs。它是一个 public 结构体，继承链为 PartyScreenLogicInitializationData。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyScreenLogicInitializationData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Party），继承链 PartyScreenLogicInitializationData。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateBasicInitDataWithMainParty` | `public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, PartyBase leftOwnerParty = null, TextObject leftPartyName = null, TextObject header = null, Hero leftLeaderHero = null, int leftPartyMembersSizeLimit = 0, int leftPartyPrisonersSizeLimit = 0, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = false, bool showProgressBar = false, int questModeWageDaysMultiplier = 0)` | 方法 |
| `CreateBasicInitDataWithMainPartyAndOther` | `public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainPartyAndOther(MobileParty party, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, TextObject header = null, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = true, bool showProgressBar = false)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AiBehavior](../AiBehavior)
- [同命名空间 CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [同命名空间 IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [同命名空间 MobileParty](../MobileParty)
