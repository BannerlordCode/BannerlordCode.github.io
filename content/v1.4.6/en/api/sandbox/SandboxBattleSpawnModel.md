---
title: "SandboxBattleSpawnModel"
description: "SandboxBattleSpawnModel: a public class in SandBox, inheriting BattleSpawnModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/GameComponents/SandboxBattleSpawnModel.cs."
---
# SandboxBattleSpawnModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## Overview

SandboxBattleSpawnModel lives in the SandBox module, source file SandBox/GameComponents/SandboxBattleSpawnModel.cs. It is a public class, implementing/inheriting BattleSpawnModel; the inheritance chain is SandboxBattleSpawnModel → BattleSpawnModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleSpawnModel is a top-level type in SandBox, namespace differing from (SandBox.GameComponents) the module directory; inheritance chain SandboxBattleSpawnModel → BattleSpawnModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. BattleSpawnModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxBattleSpawnModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public override void OnMissionStart()` | method |
| `OnMissionEnd` | `public override void OnMissionEnd()` | method |
| `int>>GetInitialSpawnAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |
| `int>>GetReinforcementAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
