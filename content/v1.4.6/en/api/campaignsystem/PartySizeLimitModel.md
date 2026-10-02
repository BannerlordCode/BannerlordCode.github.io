---
title: "PartySizeLimitModel"
description: "PartySizeLimitModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartySizeLimitModel>; 10 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs."
---
# PartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`

## Overview

PartySizeLimitModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartySizeLimitModel>; the inheritance chain is PartySizeLimitModel → MBGameModel. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartySizeLimitModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartySizeLimitModel → MBGameModel. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
