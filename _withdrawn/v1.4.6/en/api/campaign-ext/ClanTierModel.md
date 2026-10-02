---
title: "ClanTierModel"
description: "ClanTierModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<ClanTierModel>; 14 exposed members (7 methods, 7 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanTierModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

ClanTierModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanTierModel>; the inheritance chain is ClanTierModel → MBGameModel → GameModel. It exposes 14 public/protected members: 7 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanTierModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain ClanTierModel → MBGameModel → GameModel. The surface is method-led (methods 7/14, properties 7/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinClanTier` | `public abstract int MinClanTier` | property |
| `MaxClanTier` | `public abstract int MaxClanTier` | property |
| `MercenaryEligibleTier` | `public abstract int MercenaryEligibleTier` | property |
| `VassalEligibleTier` | `public abstract int VassalEligibleTier` | property |
| `BannerEligibleTier` | `public abstract int BannerEligibleTier` | property |
| `RebelClanStartingTier` | `public abstract int RebelClanStartingTier` | property |
| `CompanionToLordClanStartingTier` | `public abstract int CompanionToLordClanStartingTier` | property |
| `CalculateInitialRenown` | `public abstract int CalculateInitialRenown(Clan clan);` | method |
| `CalculateInitialInfluence` | `public abstract int CalculateInitialInfluence(Clan clan);` | method |
| `CalculateTier` | `public abstract int CalculateTier(Clan clan);` | method |
| `bool>HasUpcomingTier` | `public abstract ValueTuple<ExplainedNumber, bool>HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false);` | method |
| `GetRequiredRenownForTier` | `public abstract int GetRequiredRenownForTier(int tier);` | method |
| `GetPartyLimitForTier` | `public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck);` | method |
| `GetCompanionLimit` | `public abstract int GetCompanionLimit(Clan clan);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
