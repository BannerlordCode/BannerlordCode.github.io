---
title: "DefaultClanTierModel"
description: "DefaultClanTierModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting ClanTierModel; 14 exposed members (7 methods, 7 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultClanTierModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultClanTierModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs. It is a public class, implementing/inheriting ClanTierModel; the inheritance chain is DefaultClanTierModel → ClanTierModel → MBGameModel → GameModel. It exposes 14 public/protected members: 7 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultClanTierModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultClanTierModel → ClanTierModel → MBGameModel → GameModel. The surface is method-led (methods 7/14, properties 7/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinClanTier` | `public override int MinClanTier` | property |
| `MaxClanTier` | `public override int MaxClanTier` | property |
| `MercenaryEligibleTier` | `public override int MercenaryEligibleTier` | property |
| `VassalEligibleTier` | `public override int VassalEligibleTier` | property |
| `BannerEligibleTier` | `public override int BannerEligibleTier` | property |
| `RebelClanStartingTier` | `public override int RebelClanStartingTier` | property |
| `CompanionToLordClanStartingTier` | `public override int CompanionToLordClanStartingTier` | property |
| `CalculateInitialRenown` | `public override int CalculateInitialRenown(Clan clan)` | method |
| `CalculateInitialInfluence` | `public override int CalculateInitialInfluence(Clan clan)` | method |
| `CalculateTier` | `public override int CalculateTier(Clan clan)` | method |
| `bool>HasUpcomingTier` | `public override ValueTuple<ExplainedNumber, bool>HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)` | method |
| `GetRequiredRenownForTier` | `public override int GetRequiredRenownForTier(int tier)` | method |
| `GetPartyLimitForTier` | `public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)` | method |
| `GetCompanionLimit` | `public override int GetCompanionLimit(Clan clan)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanTierModel](../ClanTierModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
