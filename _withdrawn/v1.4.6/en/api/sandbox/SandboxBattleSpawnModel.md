---
title: "SandboxBattleSpawnModel"
description: "SandboxBattleSpawnModel: a public class in SandBox.GameComponents, inheriting BattleSpawnModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/GameComponents/SandboxBattleSpawnModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxBattleSpawnModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxBattleSpawnModel lives in the SandBox module, source file SandBox/GameComponents/SandboxBattleSpawnModel.cs. It is a public class, implementing/inheriting BattleSpawnModel; the inheritance chain is SandboxBattleSpawnModel → BattleSpawnModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleSpawnModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GameComponents`, inheritance chain SandboxBattleSpawnModel → BattleSpawnModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxBattleSpawnModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMissionStart` | `public override void OnMissionStart()` | method |
| `OnMissionEnd` | `public override void OnMissionEnd()` | method |
| `int>>GetInitialSpawnAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |
| `int>>GetReinforcementAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleSpawnModel](../../mission-ext/BattleSpawnModel/)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
