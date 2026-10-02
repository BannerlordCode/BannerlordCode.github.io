---
title: "SandboxMissionDifficultyModel"
description: "SandboxMissionDifficultyModel: a public class in SandBox, inheriting MissionDifficultyModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox/GameComponents/SandboxMissionDifficultyModel.cs."
---
# SandboxMissionDifficultyModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxMissionDifficultyModel : MissionDifficultyModel`
**File:** `SandBox/GameComponents/SandboxMissionDifficultyModel.cs`

## Overview

SandboxMissionDifficultyModel lives in the SandBox module, source file SandBox/GameComponents/SandboxMissionDifficultyModel.cs. It is a public class, implementing/inheriting MissionDifficultyModel; the inheritance chain is SandboxMissionDifficultyModel → MissionDifficultyModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxMissionDifficultyModel is a top-level type in SandBox, namespace differing from (SandBox.GameComponents) the module directory; inheritance chain SandboxMissionDifficultyModel → MissionDifficultyModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MissionDifficultyModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxMissionDifficultyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDamageMultiplierOfCombatDifficulty` | `public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
