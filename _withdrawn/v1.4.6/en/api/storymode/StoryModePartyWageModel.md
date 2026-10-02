---
title: "StoryModePartyWageModel"
description: "StoryModePartyWageModel: a public class in StoryMode.GameComponents, inheriting PartyWageModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModePartyWageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModePartyWageModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**File:** `StoryMode/GameComponents/StoryModePartyWageModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModePartyWageModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModePartyWageModel.cs. It is a public class, implementing/inheriting PartyWageModel; the inheritance chain is StoryModePartyWageModel → PartyWageModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModePartyWageModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModePartyWageModel → PartyWageModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModePartyWageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit` | property |
| `GetCharacterWage` | `public override int GetCharacterWage(CharacterObject character)` | method |
| `GetTotalWage` | `public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | method |
| `GetTroopRecruitmentCost` | `public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyWageModel](../../campaign-ext/PartyWageModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
