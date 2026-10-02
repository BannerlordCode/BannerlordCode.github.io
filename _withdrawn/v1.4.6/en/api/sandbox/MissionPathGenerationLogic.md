---
title: "MissionPathGenerationLogic"
description: "MissionPathGenerationLogic: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 39 exposed members (6 methods, 9 properties, 14 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionPathGenerationLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionPathGenerationLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionPathGenerationLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 39 public/protected members: 6 methods, 9 properties, 14 fields, 1 constructors, 9 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionPathGenerationLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain MissionPathGenerationLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is property-led (properties 9/39, methods 6/39), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionPathGenerationLogic` | `public MissionPathGenerationLogic(CharacterObject defaultDisguiseCharacter)` | constructor |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `InitializeBehavior` | `public void InitializeBehavior()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `List` | `public List<MissionPathGenerationLogic.PointOfInterestScorePair>GetAllPossiblePaths()` | method |
| `IsOnLeftSide` | `public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)` | method |
| `MinimumPathDistance` | `public static int MinimumPathDistance` | field |
| `MaximumPathDistance` | `public static int MaximumPathDistance` | field |
| `MinimumDistanceToBlendPointToVisitPoint` | `public float MinimumDistanceToBlendPointToVisitPoint` | field |
| `MinimumVisitPointCountInPath` | `public static int MinimumVisitPointCountInPath` | field |
| `MaximumVisitPointCountInPath` | `public static int MaximumVisitPointCountInPath` | field |
| `MinimumCrossRoadCountInPath` | `public static int MinimumCrossRoadCountInPath` | field |
| `MaximumCrossRoadCountInPath` | `public static int MaximumCrossRoadCountInPath` | field |
| `MinimumStandingGuardCountInPath` | `public static int MinimumStandingGuardCountInPath` | field |
| `MaximumStandingGuardCountInPath` | `public static int MaximumStandingGuardCountInPath` | field |
| `MinimumGuardSpawnPathRatio` | `public static float MinimumGuardSpawnPathRatio` | field |
| `CrossRoadMaximumDistance` | `public int CrossRoadMaximumDistance` | field |
| `CrossRoadMinimumDistance` | `public int CrossRoadMinimumDistance` | field |
| `MinimumVisitPointDistance` | `public int MinimumVisitPointDistance` | field |
| `MaximumVisitPointDistance` | `public int MaximumVisitPointDistance` | field |
| `PointOfInterests` | `public enum PointOfInterests` | property |
| `UsableMachineData` | `public class UsableMachineData` | property |
| `NavigationPathData` | `public class NavigationPathData` | property |
| `PointOfInterestBaseData` | `public abstract class PointOfInterestBaseData` | property |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class LookBackPointData : MissionPathGenerationLogic.PointOfInterestBaseData` | property |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class VisitPointNodeScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | property |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class CrossRoadScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | property |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class StandingGuardSpawnData : MissionPathGenerationLogic.PointOfInterestBaseData` | property |
| `PointOfInterestScorePair` | `public class PointOfInterestScorePair` | property |
| `PointOfInterests` | `public enum PointOfInterests` | nested type |
| `UsableMachineData` | `public class UsableMachineData` | nested type |
| `NavigationPathData` | `public class NavigationPathData` | nested type |
| `PointOfInterestBaseData` | `public abstract class PointOfInterestBaseData` | nested type |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class LookBackPointData : MissionPathGenerationLogic.PointOfInterestBaseData` | nested type |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class VisitPointNodeScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | nested type |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class CrossRoadScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | nested type |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class StandingGuardSpawnData : MissionPathGenerationLogic.PointOfInterestBaseData` | nested type |
| `PointOfInterestScorePair` | `public class PointOfInterestScorePair` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
