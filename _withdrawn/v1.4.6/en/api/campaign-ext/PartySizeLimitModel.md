---
title: "PartySizeLimitModel"
description: "PartySizeLimitModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PartySizeLimitModel>; 10 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PartySizeLimitModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartySizeLimitModel>; the inheritance chain is PartySizeLimitModel → MBGameModel → GameModel. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartySizeLimitModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PartySizeLimitModel → MBGameModel → GameModel. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetPartyMemberSizeLimit` | `public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false);` | method |
| `GetPartyPrisonerSizeLimit` | `public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false);` | method |
| `CalculateGarrisonPartySizeLimit` | `public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false);` | method |
| `GetClanTierPartySizeEffectForHero` | `public abstract int GetClanTierPartySizeEffectForHero(Hero hero);` | method |
| `GetNextClanTierPartySizeEffectChangeForHero` | `public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero);` | method |
| `GetAssumedPartySizeForLordParty` | `public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan);` | method |
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty` | property |
| `GetIdealVillagerPartySize` | `public abstract int GetIdealVillagerPartySize(Village village);` | method |
| `FindAppropriateInitialRosterForMobileParty` | `public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate);` | method |
| `List` | `public abstract List<Ship>FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
