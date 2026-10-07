---
title: "IFormation"
description: "The battle-level interface that defines how units are spatially arranged in a formation, exposing intervals, distances, and unit position queries."
---

# IFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormation`
**Base:** (none — marker interface)
**File:** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IFormation.cs`

## Overview

`IFormation` is the interface that defines the spatial arrangement of units in a battle formation. It is the contract every formation type implements to describe how units are positioned relative to each other — the interval between ranks, the distance between units, the diameter of each unit's footprint, and the methods for querying and manipulating unit positions in local formation space. The interface is declared at IFormation.cs:6 as `public interface IFormation`.

The interface is focused on geometry. It does not handle combat AI, morale, or orders — it handles the physical layout of troops on the battlefield. A formation owns a collection of `IFormationUnit` instances and is responsible for computing where each unit should stand, how much space it occupies, and which units are closest to a given point.

The primary implementer is `Formation` (Formation.cs:14, `public sealed class Formation : IFormation`), which is the base class for all concrete formation types. Derived formations such as `ColumnFormation` and `LineFormation` extend `Formation` to provide specific arrangement strategies. Formations are owned by detachments and teams in battle, and each unit on the battlefield belongs to exactly one formation.

## Mental Model

Think of `IFormation` as the "where" of a battle unit. If a unit is a soldier, the formation is the grid or pattern that soldier stands in. The interface answers questions like: how far apart are the ranks? How much space does each unit take up? Where should this unit stand? Which unit is closest to this point?

Key rules to internalize:

- **Local space is relative.** Formation positions are expressed in a local coordinate system centered on the formation. The formation's position and orientation in the world are managed by the detachment or team, not by the formation itself.
- **Interval and distance are distinct.** `Interval` is the spacing between units within a rank (side-to-side). `Distance` is the spacing between ranks (front-to-back). `UnitDiameter` is the footprint of a single unit.
- **Bounds are clamped.** `MinimumInterval`, `MaximumInterval`, `MinimumDistance`, and `MaximumDistance` define the valid range for spacing. The formation clamps its current `Interval` and `Distance` to these bounds.
- **Unit count can be overridden.** `OverridenUnitCount` (an `int?`) allows a formation to pretend it has a different number of units than it actually does, which is useful for deployment planning.
- **Positions are batched.** `BatchUnitPositions` computes positions for multiple units at once, which is more efficient than querying positions one at a time.
- **Closest-unit queries are spatial.** `GetClosestUnitTo` finds the nearest unit to a point or to another unit, which is useful for targeting and positioning logic.

## How to use

### How to get it

A unit's formation is accessed through the unit's formation property. In battle, each `IFormationUnit` knows which `IFormation` it belongs to. To get the formation of a specific unit, access the unit's formation reference. The `Formation` class (Formation.cs:14) is the concrete implementer you will work with in practice. Derived formations like `ColumnFormation` and `LineFormation` are created by the game's battle system based on the selected formation type.

### Typical usage

A mod typically reads formation geometry to make decisions about unit positioning or to render formation information. The most common patterns are: reading `Interval`, `Distance`, and `UnitDiameter` to understand the formation's spatial footprint, calling `GetClosestUnitTo` to find the nearest unit to a target, using `BatchUnitPositions` to compute positions for multiple units efficiently, and checking `OverridenUnitCount` to see if the formation's unit count has been overridden for deployment. When you need to react to formation changes, `OnUnitAddedOrRemoved` is called when the unit roster changes.

### Pitfalls

- **Do not assume world coordinates.** Formation positions are in local space. You must transform them to world space using the formation's position and orientation before using them for world-space calculations.
- **Do not ignore the bounds.** `Interval` and `Distance` are clamped to `MinimumInterval`/`MaximumInterval` and `MinimumDistance`/`MaximumDistance`. If you set values outside these bounds, they will be silently clamped.
- **Do not cache `OverridenUnitCount`.** It is a nullable value that can change during deployment. Re-read it when you need the current override state.
- **Do not call `GetClosestUnitTo` in tight loops.** It is a spatial query that iterates over units. Use `BatchUnitPositions` when you need to compute positions for many units at once.
- **Do not forget `OnUnitAddedOrRemoved`.** If you maintain any cached state about the formation's unit roster, you must update it when units are added or removed.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Interval` | `float Interval { get; set; }` | The spacing between units within a rank (side-to-side). |
| `Distance` | `float Distance { get; set; }` | The spacing between ranks (front-to-back). |
| `UnitDiameter` | `float UnitDiameter { get; }` | The footprint diameter of a single unit in the formation. |
| `MinimumInterval` | `float MinimumInterval { get; }` | The minimum allowed interval between units. |
| `MaximumInterval` | `float MaximumInterval { get; }` | The maximum allowed interval between units. |
| `MinimumDistance` | `float MinimumDistance { get; }` | The minimum allowed distance between ranks. |
| `MaximumDistance` | `float MaximumDistance { get; }` | The maximum allowed distance between ranks. |
| `OverridenUnitCount` | `int? OverridenUnitCount { get; }` | The overridden unit count, or null if not overridden. |
| `GetIsLocalPositionAvailable` | `bool GetIsLocalPositionAvailable(Vec2 localPosition)` | Whether a local position is available for a unit in this formation. |
| `BatchUnitPositions` | `void BatchUnitPositions(int count, Vec2[] positions)` | Computes local positions for a batch of units. |
| `GetClosestUnitTo(Vec2, ...)` | `IFormationUnit GetClosestUnitTo(Vec2 position, ...)` | Finds the unit closest to a local position. |
| `GetClosestUnitTo(IFormationUnit, ...)` | `IFormationUnit GetClosestUnitTo(IFormationUnit unit, ...)` | Finds the unit closest to another unit. |
| `OnUnitAddedOrRemoved` | `void OnUnitAddedOrRemoved()` | Called when a unit is added to or removed from the formation. |
| `SetUnitToFollow` | `void SetUnitToFollow(IFormationUnit unit, IFormationUnit target)` | Sets a unit to follow another unit in the formation. |

## Real Example

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Library;

// Get a unit's formation (Formation is the concrete implementer of IFormation)
IFormation formation = someUnit.Formation;

// Read the formation's spatial geometry
float interval = formation.Interval;
float distance = formation.Distance;
float unitDiameter = formation.UnitDiameter;

// Check the valid bounds
float minInterval = formation.MinimumInterval;
float maxInterval = formation.MaximumInterval;
float minDistance = formation.MinimumDistance;
float maxDistance = formation.MaximumDistance;

// Check if the unit count has been overridden
int? overriddenCount = formation.OverridenUnitCount;
if (overriddenCount.HasValue)
{
    // The formation is using an overridden unit count for deployment
}

// Find the unit closest to a given local position
Vec2 targetPosition = new Vec2(10.0f, 5.0f);
IFormationUnit closestUnit = formation.GetClosestUnitTo(targetPosition);

// Check if a local position is available
bool isAvailable = formation.GetIsLocalPositionAvailable(targetPosition);

// Batch-compute positions for multiple units
int unitCount = formation.OverridenUnitCount ?? 10;
Vec2[] positions = new Vec2[unitCount];
formation.BatchUnitPositions(unitCount, positions);

// Set a unit to follow another unit
formation.SetUnitToFollow(someUnit, targetUnit);
```

## See also
- [IFormationUnit](../IFormationUnit)
- [IFormationArrangement](../IFormationArrangement)
- [IFormationDeploymentPlan](../IFormationDeploymentPlan)

## Navigation
- [mission-ext index](../)
- [IFormationUnit](../IFormationUnit)
- [IFormationArrangement](../IFormationArrangement)
