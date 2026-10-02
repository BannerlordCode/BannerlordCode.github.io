---
title: "LocationItemSpawnHandler"
description: "LocationItemSpawnHandler: a public class in SandBox, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs."
---
# LocationItemSpawnHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class LocationItemSpawnHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs`

## Overview

LocationItemSpawnHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is LocationItemSpawnHandler → MissionLogic. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocationItemSpawnHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain LocationItemSpawnHandler → MissionLogic. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnEntityRemoved` | `public override void OnEntityRemoved(GameEntity entity)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
