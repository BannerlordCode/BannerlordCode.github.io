---
title: "StoryModeEncounterGameMenuModel"
description: "StoryModeEncounterGameMenuModel: a public class in StoryMode.GameComponents, inheriting EncounterGameMenuModel; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeEncounterGameMenuModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeEncounterGameMenuModel : EncounterGameMenuModel`
**File:** `StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeEncounterGameMenuModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs. It is a public class, implementing/inheriting EncounterGameMenuModel; the inheritance chain is StoryModeEncounterGameMenuModel → EncounterGameMenuModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeEncounterGameMenuModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModeEncounterGameMenuModel → EncounterGameMenuModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetEncounterMenu` | `public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)` | method |
| `GetGenericStateMenu` | `public override string GetGenericStateMenu()` | method |
| `GetNewPartyJoinMenu` | `public override string GetNewPartyJoinMenu(MobileParty newParty)` | method |
| `GetRaidCompleteMenu` | `public override string GetRaidCompleteMenu()` | method |
| `IsPlunderMenu` | `public override bool IsPlunderMenu(string menuId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncounterGameMenuModel](../../campaign-ext/EncounterGameMenuModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
