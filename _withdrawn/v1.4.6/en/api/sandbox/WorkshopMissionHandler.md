---
title: "WorkshopMissionHandler"
description: "WorkshopMissionHandler: a public class in SandBox.Missions.MissionLogics.Towns, inheriting MissionLogic; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WorkshopMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

WorkshopMissionHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is WorkshopMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorkshopMissionHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Towns`, inheritance chain WorkshopMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameEntity>>WorkshopSignEntities` | `public IEnumerable<Tuple<Workshop, GameEntity>>WorkshopSignEntities` | property |
| `WorkshopMissionHandler` | `public WorkshopMissionHandler(Settlement settlement)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace AlleyFightMissionHandler](../AlleyFightMissionHandler/)
- [same namespace PrisonBreakMissionController](../PrisonBreakMissionController/)
- [same namespace TownCenterMissionController](../TownCenterMissionController/)
