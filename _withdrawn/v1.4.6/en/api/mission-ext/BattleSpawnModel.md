---
title: "BattleSpawnModel"
description: "BattleSpawnModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<BattleSpawnModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleSpawnModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleSpawnModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleSpawnModel>; the inheritance chain is BattleSpawnModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSpawnModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain BattleSpawnModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMissionStart` | `public virtual void OnMissionStart()` | method |
| `OnMissionEnd` | `public virtual void OnMissionEnd()` | method |
| `int>>GetInitialSpawnAssignments` | `public abstract List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins);` | method |
| `int>>GetReinforcementAssignments` | `public abstract List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
