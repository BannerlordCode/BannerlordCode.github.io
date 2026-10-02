---
title: "AmmoSupplyLogic"
description: "AmmoSupplyLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs."
---
# AmmoSupplyLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs`

## Overview

AmmoSupplyLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is AmmoSupplyLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AmmoSupplyLogic is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic) the module directory; inheritance chain AmmoSupplyLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AmmoSupplyLogic` | `public AmmoSupplyLogic(List<BattleSideEnum>sideList)` | constructor |
| `IsAgentEligibleForAmmoSupply` | `public bool IsAgentEligibleForAmmoSupply(Agent agent)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace AgentMoraleInteractionLogic](../AgentMoraleInteractionLogic)
- [same namespace BattleMissionAgentInteractionLogic](../BattleMissionAgentInteractionLogic)
