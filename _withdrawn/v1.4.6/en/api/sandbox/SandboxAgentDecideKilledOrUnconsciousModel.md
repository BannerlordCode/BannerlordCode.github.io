---
title: "SandboxAgentDecideKilledOrUnconsciousModel"
description: "SandboxAgentDecideKilledOrUnconsciousModel: a public class in SandBox.GameComponents, inheriting AgentDecideKilledOrUnconsciousModel; 1 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**File:** `SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxAgentDecideKilledOrUnconsciousModel lives in the SandBox module, source file SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs. It is a public class, implementing/inheriting AgentDecideKilledOrUnconsciousModel; the inheritance chain is SandboxAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel → MBGameModel → GameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxAgentDecideKilledOrUnconsciousModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GameComponents`, inheritance chain SandboxAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel → MBGameModel → GameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetAgentStateProbability` | `public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentDecideKilledOrUnconsciousModel](../../mission-ext/AgentDecideKilledOrUnconsciousModel/)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
- [same namespace SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel/)
