---
title: "StoryModeAgentDecideKilledOrUnconsciousModel"
description: "StoryModeAgentDecideKilledOrUnconsciousModel: a public class in StoryMode, inheriting AgentDecideKilledOrUnconsciousModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs."
---
# StoryModeAgentDecideKilledOrUnconsciousModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**File:** `StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs`

## Overview

StoryModeAgentDecideKilledOrUnconsciousModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs. It is a public class, implementing/inheriting AgentDecideKilledOrUnconsciousModel; the inheritance chain is StoryModeAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeAgentDecideKilledOrUnconsciousModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. AgentDecideKilledOrUnconsciousModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAgentStateProbability` | `public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
- [same namespace StoryModeCombatXpModel](../StoryModeCombatXpModel)
