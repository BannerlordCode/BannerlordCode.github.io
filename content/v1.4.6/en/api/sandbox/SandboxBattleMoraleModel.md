---
title: "SandboxBattleMoraleModel"
description: "SandboxBattleMoraleModel: a public class in SandBox, inheriting BattleMoraleModel; 10 exposed members (10 methods, 0 properties, 0 fields). Source: SandBox/GameComponents/SandboxBattleMoraleModel.cs."
---
# SandboxBattleMoraleModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel`
**File:** `SandBox/GameComponents/SandboxBattleMoraleModel.cs`

## Overview

SandboxBattleMoraleModel lives in the SandBox module, source file SandBox/GameComponents/SandboxBattleMoraleModel.cs. It is a public class, implementing/inheriting BattleMoraleModel; the inheritance chain is SandboxBattleMoraleModel → BattleMoraleModel. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleMoraleModel is a top-level type in SandBox, namespace differing from (SandBox.GameComponents) the module directory; inheritance chain SandboxBattleMoraleModel → BattleMoraleModel. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. BattleMoraleModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxBattleMoraleModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
