---
title: "CustomBattleSpawnModel"
description: "CustomBattleSpawnModel: a public class in TaleWorlds.MountAndBlade, inheriting BattleSpawnModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CustomBattleSpawnModel.cs."
---
# CustomBattleSpawnModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleSpawnModel : BattleSpawnModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleSpawnModel.cs`

## Overview

CustomBattleSpawnModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleSpawnModel.cs. It is a public class, implementing/inheriting BattleSpawnModel; the inheritance chain is CustomBattleSpawnModel → BattleSpawnModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleSpawnModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CustomBattleSpawnModel → BattleSpawnModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleSpawnModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public override void OnMissionStart()` | method |
| `OnMissionEnd` | `public override void OnMissionEnd()` | method |
| `int>>GetInitialSpawnAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |
| `int>>GetReinforcementAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BattleSpawnModel](../BattleSpawnModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
