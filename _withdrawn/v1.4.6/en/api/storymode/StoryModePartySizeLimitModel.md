---
title: "StoryModePartySizeLimitModel"
description: "StoryModePartySizeLimitModel: a public class in StoryMode.GameComponents, inheriting PartySizeLimitModel; 10 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModePartySizeLimitModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModePartySizeLimitModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePartySizeLimitModel : PartySizeLimitModel`
**File:** `StoryMode/GameComponents/StoryModePartySizeLimitModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModePartySizeLimitModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModePartySizeLimitModel.cs. It is a public class, implementing/inheriting PartySizeLimitModel; the inheritance chain is StoryModePartySizeLimitModel → PartySizeLimitModel → MBGameModel → GameModel. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModePartySizeLimitModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModePartySizeLimitModel → PartySizeLimitModel → MBGameModel → GameModel. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModePartySizeLimitModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty` | property |
| `CalculateGarrisonPartySizeLimit` | `public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)` | method |
| `FindAppropriateInitialRosterForMobileParty` | `public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | method |
| `List` | `public override List<Ship>FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | method |
| `GetAssumedPartySizeForLordParty` | `public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)` | method |
| `GetClanTierPartySizeEffectForHero` | `public override int GetClanTierPartySizeEffectForHero(Hero hero)` | method |
| `GetIdealVillagerPartySize` | `public override int GetIdealVillagerPartySize(Village village)` | method |
| `GetNextClanTierPartySizeEffectChangeForHero` | `public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)` | method |
| `GetPartyMemberSizeLimit` | `public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)` | method |
| `GetPartyPrisonerSizeLimit` | `public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartySizeLimitModel](../../campaign-ext/PartySizeLimitModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
