---
title: "WorkshopMissionHandler"
description: "WorkshopMissionHandler: a public class in SandBox, inheriting MissionLogic; 5 exposed members (3 methods, 1 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs."
---
# WorkshopMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs`

## Overview

WorkshopMissionHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is WorkshopMissionHandler → MissionLogic. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorkshopMissionHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Towns) the module directory; inheritance chain WorkshopMissionHandler → MissionLogic. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameEntity>>WorkshopSignEntities` | `public IEnumerable<Tuple<Workshop, GameEntity>>WorkshopSignEntities` | property |
| `WorkshopMissionHandler` | `public WorkshopMissionHandler(Settlement settlement)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyFightMissionHandler](../AlleyFightMissionHandler)
- [same namespace PrisonBreakMissionController](../PrisonBreakMissionController)
- [same namespace TownCenterMissionController](../TownCenterMissionController)
