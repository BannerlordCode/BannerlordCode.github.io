---
title: "SandboxBattleMoraleModel"
description: "SandboxBattleMoraleModel: a public class in SandBox.GameComponents, inheriting BattleMoraleModel; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/GameComponents/SandboxBattleMoraleModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxBattleMoraleModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel`
**File:** `SandBox/GameComponents/SandboxBattleMoraleModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxBattleMoraleModel lives in the SandBox module, source file SandBox/GameComponents/SandboxBattleMoraleModel.cs. It is a public class, implementing/inheriting BattleMoraleModel; the inheritance chain is SandboxBattleMoraleModel → BattleMoraleModel → MBGameModel → GameModel. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleMoraleModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GameComponents`, inheritance chain SandboxBattleMoraleModel → BattleMoraleModel → MBGameModel → GameModel. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxBattleMoraleModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `float>CalculateMaxMoraleChangeDueToAgentIncapacitated` | `public override ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)` | method |
| `float>CalculateMaxMoraleChangeDueToAgentPanicked` | `public override ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)` | method |
| `CalculateMoraleChangeToCharacter` | `public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)` | method |
| `GetEffectiveInitialMorale` | `public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)` | method |
| `CanPanicDueToMorale` | `public override bool CanPanicDueToMorale(Agent agent)` | method |
| `CalculateCasualtiesFactor` | `public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)` | method |
| `GetAverageMorale` | `public override float GetAverageMorale(Formation formation)` | method |
| `CalculateMoraleChangeOnShipSunk` | `public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)` | method |
| `CalculateMoraleOnRamming` | `public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)` | method |
| `CalculateMoraleOnShipsConnected` | `public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleMoraleModel](../../mission-ext/BattleMoraleModel/)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
