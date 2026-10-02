---
title: "DefaultPartySizeLimitModel"
description: "DefaultPartySizeLimitModel: a public class in TaleWorlds.CampaignSystem, inheriting PartySizeLimitModel; 10 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs."
---
# DefaultPartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`

## Overview

DefaultPartySizeLimitModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs. It is a public class, implementing/inheriting PartySizeLimitModel; the inheritance chain is DefaultPartySizeLimitModel → PartySizeLimitModel → MBGameModel. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartySizeLimitModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartySizeLimitModel → PartySizeLimitModel → MBGameModel. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty` | property |
| `GetPartyMemberSizeLimit` | `public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)` | method |
| `GetPartyPrisonerSizeLimit` | `public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)` | method |
| `CalculateGarrisonPartySizeLimit` | `public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)` | method |
| `GetNextClanTierPartySizeEffectChangeForHero` | `public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)` | method |
| `GetAssumedPartySizeForLordParty` | `public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)` | method |
| `GetClanTierPartySizeEffectForHero` | `public override int GetClanTierPartySizeEffectForHero(Hero hero)` | method |
| `GetIdealVillagerPartySize` | `public override int GetIdealVillagerPartySize(Village village)` | method |
| `FindAppropriateInitialRosterForMobileParty` | `public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | method |
| `List` | `public override List<Ship>FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartySizeLimitModel](../PartySizeLimitModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
