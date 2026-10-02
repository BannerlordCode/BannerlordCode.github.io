---
title: "SandboxAgentDecideKilledOrUnconsciousModel"
description: "SandboxAgentDecideKilledOrUnconsciousModel: a public class in SandBox, inheriting AgentDecideKilledOrUnconsciousModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs."
---
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**File:** `SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`

## Overview

SandboxAgentDecideKilledOrUnconsciousModel lives in the SandBox module, source file SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs. It is a public class, implementing/inheriting AgentDecideKilledOrUnconsciousModel; the inheritance chain is SandboxAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxAgentDecideKilledOrUnconsciousModel is a top-level type in SandBox, namespace differing from (SandBox.GameComponents) the module directory; inheritance chain SandboxAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. AgentDecideKilledOrUnconsciousModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAgentStateProbability` | `public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
- [same namespace SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel)
