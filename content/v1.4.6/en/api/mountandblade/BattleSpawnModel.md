---
title: "BattleSpawnModel"
description: "BattleSpawnModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<BattleSpawnModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs."
---
# BattleSpawnModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## Overview

BattleSpawnModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleSpawnModel>; the inheritance chain is BattleSpawnModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSpawnModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain BattleSpawnModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public virtual void OnMissionStart()` | method |
| `OnMissionEnd` | `public virtual void OnMissionEnd()` | method |
| `int>>GetInitialSpawnAssignments` | `public abstract List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins);` | method |
| `int>>GetReinforcementAssignments` | `public abstract List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
