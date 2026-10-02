---
title: "IFormation"
description: "IFormation: a public interface in TaleWorlds.MountAndBlade; 14 exposed members (6 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IFormation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormation`
**File:** `TaleWorlds.MountAndBlade/IFormation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IFormation.cs. It is a public interface; the inheritance chain is IFormation. It exposes 14 public/protected members: 6 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFormation lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IFormation. The surface is property-led (properties 8/14, methods 6/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IFormation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Interval` | `float Interval` | property |
| `Distance` | `float Distance` | property |
| `UnitDiameter` | `float UnitDiameter` | property |
| `MinimumInterval` | `float MinimumInterval` | property |
| `MaximumInterval` | `float MaximumInterval` | property |
| `MinimumDistance` | `float MinimumDistance` | property |
| `MaximumDistance` | `float MaximumDistance` | property |
| `OverridenUnitCount` | `int? OverridenUnitCount` | property |
| `GetIsLocalPositionAvailable` | `bool GetIsLocalPositionAvailable(Vec2 localPosition, Vec2? nearestAvailableUnitPositionLocal);` | method |
| `BatchUnitPositions` | `bool BatchUnitPositions(MBArrayList<Vec2i>orderedPositionIndices, MBArrayList<Vec2>orderedLocalPositions, MBList2D<int>availabilityTable, MBList2D<WorldPosition>globalPositionTable, int fileCount, int rankCount);` | method |
| `GetClosestUnitTo` | `IFormationUnit GetClosestUnitTo(Vec2 localPosition, MBList<IFormationUnit>unitsWithSpaces = null, float? maxDistance = null);` | method |
| `GetClosestUnitTo` | `IFormationUnit GetClosestUnitTo(IFormationUnit targetUnit, MBList<IFormationUnit>unitsWithSpaces = null, float? maxDistance = null);` | method |
| `OnUnitAddedOrRemoved` | `void OnUnitAddedOrRemoved();` | method |
| `SetUnitToFollow` | `void SetUnitToFollow(IFormationUnit unit, IFormationUnit toFollow, Vec2 vector);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
