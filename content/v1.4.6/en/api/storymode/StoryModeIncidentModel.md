---
title: "StoryModeIncidentModel"
description: "StoryModeIncidentModel: a public class in StoryMode, inheriting IncidentModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeIncidentModel.cs."
---
# StoryModeIncidentModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeIncidentModel : IncidentModel`
**File:** `StoryMode/GameComponents/StoryModeIncidentModel.cs`

## Overview

StoryModeIncidentModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeIncidentModel.cs. It is a public class, implementing/inheriting IncidentModel; the inheritance chain is StoryModeIncidentModel → IncidentModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeIncidentModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeIncidentModel → IncidentModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. IncidentModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeIncidentModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMinGlobalCooldownTime` | `public override CampaignTime GetMinGlobalCooldownTime()` | method |
| `GetMaxGlobalCooldownTime` | `public override CampaignTime GetMaxGlobalCooldownTime()` | method |
| `GetIncidentTriggerGlobalProbability` | `public override float GetIncidentTriggerGlobalProbability()` | method |
| `GetIncidentTriggerProbabilityDuringSiege` | `public override float GetIncidentTriggerProbabilityDuringSiege()` | method |
| `GetIncidentTriggerProbabilityDuringWait` | `public override float GetIncidentTriggerProbabilityDuringWait()` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
