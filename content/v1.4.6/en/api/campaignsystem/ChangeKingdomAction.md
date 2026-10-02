---
title: "ChangeKingdomAction"
description: "ChangeKingdomAction: a public class in TaleWorlds.CampaignSystem; 16 exposed members (9 methods, 1 properties, 5 fields). Source: TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs."
---
# ChangeKingdomAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeKingdomAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`

## Overview

ChangeKingdomAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs. It is a public class; the inheritance chain is ChangeKingdomAction. It exposes 16 public/protected members: 9 methods, 1 properties, 5 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeKingdomAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain ChangeKingdomAction. The surface is method-led (methods 9/16, properties 1/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByJoinToKingdom` | `public static void ApplyByJoinToKingdom(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)` | method |
| `ApplyByJoinToKingdomByDefection` | `public static void ApplyByJoinToKingdomByDefection(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)` | method |
| `ApplyByCreateKingdom` | `public static void ApplyByCreateKingdom(Clan clan, Kingdom newKingdom, bool showNotification = true)` | method |
| `ApplyByLeaveByKingdomDestruction` | `public static void ApplyByLeaveByKingdomDestruction(Clan clan, bool showNotification = true)` | method |
| `ApplyByLeaveKingdom` | `public static void ApplyByLeaveKingdom(Clan clan, bool showNotification = true)` | method |
| `ApplyByLeaveWithRebellionAgainstKingdom` | `public static void ApplyByLeaveWithRebellionAgainstKingdom(Clan clan, bool showNotification = true)` | method |
| `ApplyByJoinFactionAsMercenary` | `public static void ApplyByJoinFactionAsMercenary(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), int awardMultiplier = 50, bool showNotification = true)` | method |
| `ApplyByLeaveKingdomAsMercenary` | `public static void ApplyByLeaveKingdomAsMercenary(Clan mercenaryClan, bool showNotification = true)` | method |
| `ApplyByLeaveKingdomByClanDestruction` | `public static void ApplyByLeaveKingdomByClanDestruction(Clan clan, bool showNotification = true)` | method |
| `PotentialSettlementsPerNobleEffect` | `public const float PotentialSettlementsPerNobleEffect` | field |
| `NewGainedFiefsValueForKingdomConstant` | `public const float NewGainedFiefsValueForKingdomConstant` | field |
| `LordsUnitStrengthValue` | `public const float LordsUnitStrengthValue` | field |
| `MercenaryUnitStrengthValue` | `public const float MercenaryUnitStrengthValue` | field |
| `MinimumNeededGoldForRecruitingMercenaries` | `public const float MinimumNeededGoldForRecruitingMercenaries` | field |
| `ChangeKingdomActionDetail` | `public enum ChangeKingdomActionDetail` | property |
| `ChangeKingdomActionDetail` | `public enum ChangeKingdomActionDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
