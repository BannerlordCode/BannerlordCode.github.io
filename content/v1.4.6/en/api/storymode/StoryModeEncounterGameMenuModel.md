---
title: "StoryModeEncounterGameMenuModel"
description: "StoryModeEncounterGameMenuModel: a public class in StoryMode, inheriting EncounterGameMenuModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs."
---
# StoryModeEncounterGameMenuModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeEncounterGameMenuModel : EncounterGameMenuModel`
**File:** `StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs`

## Overview

StoryModeEncounterGameMenuModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs. It is a public class, implementing/inheriting EncounterGameMenuModel; the inheritance chain is StoryModeEncounterGameMenuModel → EncounterGameMenuModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeEncounterGameMenuModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeEncounterGameMenuModel → EncounterGameMenuModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. EncounterGameMenuModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEncounterMenu` | `public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)` | method |
| `GetGenericStateMenu` | `public override string GetGenericStateMenu()` | method |
| `GetNewPartyJoinMenu` | `public override string GetNewPartyJoinMenu(MobileParty newParty)` | method |
| `GetRaidCompleteMenu` | `public override string GetRaidCompleteMenu()` | method |
| `IsPlunderMenu` | `public override bool IsPlunderMenu(string menuId)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
