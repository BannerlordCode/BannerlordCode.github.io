---
title: "StoryModeTroopSupplierProbabilityModel"
description: "StoryModeTroopSupplierProbabilityModel: a public class in StoryMode, inheriting TroopSupplierProbabilityModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs."
---
# StoryModeTroopSupplierProbabilityModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**File:** `StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs`

## Overview

StoryModeTroopSupplierProbabilityModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs. It is a public class, implementing/inheriting TroopSupplierProbabilityModel; the inheritance chain is StoryModeTroopSupplierProbabilityModel → TroopSupplierProbabilityModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeTroopSupplierProbabilityModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeTroopSupplierProbabilityModel → TroopSupplierProbabilityModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. TroopSupplierProbabilityModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization` | `public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>>priorityList)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
