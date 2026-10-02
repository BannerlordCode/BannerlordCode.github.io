---
title: "PartyScreenLogicInitializationData"
description: "PartyScreenLogicInitializationData: a public struct in TaleWorlds.CampaignSystem; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs."
---
# PartyScreenLogicInitializationData

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct PartyScreenLogicInitializationData`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs`

## Overview

PartyScreenLogicInitializationData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs. It is a public struct; the inheritance chain is PartyScreenLogicInitializationData. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyScreenLogicInitializationData is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Party) the module directory; inheritance chain PartyScreenLogicInitializationData. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Party/PartyScreenLogicInitializationData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateBasicInitDataWithMainParty` | `public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, PartyBase leftOwnerParty = null, TextObject leftPartyName = null, TextObject header = null, Hero leftLeaderHero = null, int leftPartyMembersSizeLimit = 0, int leftPartyPrisonersSizeLimit = 0, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = false, bool showProgressBar = false, int questModeWageDaysMultiplier = 0)` | method |
| `CreateBasicInitDataWithMainPartyAndOther` | `public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainPartyAndOther(MobileParty party, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, TextObject header = null, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = true, bool showProgressBar = false)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AiBehavior](../AiBehavior)
- [same namespace CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [same namespace IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [same namespace MobileParty](../MobileParty)
