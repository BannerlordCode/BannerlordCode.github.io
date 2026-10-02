---
title: "CustomBattleMoraleModel"
description: "CustomBattleMoraleModel: a public class in TaleWorlds.MountAndBlade, inheriting BattleMoraleModel; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleMoraleModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleMoraleModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs. It is a public class, implementing/inheriting BattleMoraleModel; the inheritance chain is CustomBattleMoraleModel → BattleMoraleModel → MBGameModel → GameModel. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleMoraleModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CustomBattleMoraleModel → BattleMoraleModel → MBGameModel → GameModel. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs or the deep page for this type.

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
- [base / interface BattleMoraleModel](../BattleMoraleModel/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
