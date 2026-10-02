---
title: "StoryModeIncidentModel"
description: "StoryModeIncidentModel: a public class in StoryMode.GameComponents, inheriting IncidentModel; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModeIncidentModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeIncidentModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeIncidentModel : IncidentModel`
**File:** `StoryMode/GameComponents/StoryModeIncidentModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeIncidentModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeIncidentModel.cs. It is a public class, implementing/inheriting IncidentModel; the inheritance chain is StoryModeIncidentModel → IncidentModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeIncidentModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModeIncidentModel → IncidentModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeIncidentModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMinGlobalCooldownTime` | `public override CampaignTime GetMinGlobalCooldownTime()` | method |
| `GetMaxGlobalCooldownTime` | `public override CampaignTime GetMaxGlobalCooldownTime()` | method |
| `GetIncidentTriggerGlobalProbability` | `public override float GetIncidentTriggerGlobalProbability()` | method |
| `GetIncidentTriggerProbabilityDuringSiege` | `public override float GetIncidentTriggerProbabilityDuringSiege()` | method |
| `GetIncidentTriggerProbabilityDuringWait` | `public override float GetIncidentTriggerProbabilityDuringWait()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IncidentModel](../../campaign-ext/IncidentModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
