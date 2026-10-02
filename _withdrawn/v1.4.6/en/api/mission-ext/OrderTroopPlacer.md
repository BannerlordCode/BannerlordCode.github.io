---
title: "OrderTroopPlacer"
description: "OrderTroopPlacer: a public class in TaleWorlds.MountAndBlade.View.MissionViews.Order, inheriting MissionView; 22 exposed members (16 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderTroopPlacer

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Order`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class OrderTroopPlacer : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OrderTroopPlacer lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is OrderTroopPlacer → MissionView → MissionBehavior → IMissionBehavior. It exposes 22 public/protected members: 16 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderTroopPlacer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews.Order`, inheritance chain OrderTroopPlacer → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 16/22, properties 4/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SuspendTroopPlacer` | `public bool SuspendTroopPlacer` | property |
| `OrderFlag` | `public OrderFlag OrderFlag` | property |
| `OrderController` | `protected OrderController OrderController` | property |
| `OrderTroopPlacer` | `public OrderTroopPlacer(OrderController orderController)` | constructor |
| `CreateOrderFlag` | `protected virtual OrderFlag CreateOrderFlag()` | method |
| `CanUpdate` | `protected virtual bool CanUpdate()` | method |
| `HasSelectedFormations` | `protected virtual bool HasSelectedFormations()` | method |
| `GetCursorState` | `protected virtual OrderTroopPlacer.CursorState GetCursorState()` | method |
| `GetGroundedVec3` | `protected virtual Vec3 GetGroundedVec3(WorldPosition worldPosition)` | method |
| `TryGetScreenMiddleToWorldPosition` | `protected virtual bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition, out float collisionDistance, out WeakGameEntity collidedEntity)` | method |
| `TryGetScreenMiddleToWorldPosition` | `protected bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition, out float collisionDistance)` | method |
| `TryGetScreenMiddleToWorldPosition` | `protected bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition, out WeakGameEntity collidedEntity)` | method |
| `TryGetScreenMiddleToWorldPosition` | `protected bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition)` | method |
| `GetScreenPoint` | `protected Vec2 GetScreenPoint()` | method |
| `GetGroundOrNormalCursor` | `public OrderTroopPlacer.CursorState GetGroundOrNormalCursor()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `RestrictOrdersToDeploymentBoundaries` | `public void RestrictOrdersToDeploymentBoundaries(bool enabled)` | method |
| `UpdateFormationDrawing` | `public void UpdateFormationDrawing(bool giveOrder)` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `CursorState` | `public enum CursorState` | property |
| `CursorState` | `public enum CursorState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace OrderFlag](../OrderFlag/)
