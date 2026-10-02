---
title: "ClearTheMainCampObjective"
description: "ClearTheMainCampObjective: a public class in SandBox.Missions.MissionLogics.Hideout.Objectives, inheriting MissionObjective; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClearTheMainCampObjective

**Namespace:** `SandBox.Missions.MissionLogics.Hideout.Objectives`
**Module:** `SandBox`
**Type:** `public class ClearTheMainCampObjective : MissionObjective`
**File:** `SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ClearTheMainCampObjective lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs. It is a public class, implementing/inheriting MissionObjective; the inheritance chain is ClearTheMainCampObjective → MissionObjective. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClearTheMainCampObjective lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Hideout.Objectives`, inheritance chain ClearTheMainCampObjective → MissionObjective. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UniqueId` | `public override string UniqueId` | property |
| `Name` | `public override TextObject Name` | property |
| `Description` | `public override TextObject Description` | property |
| `ClearTheMainCampObjective` | `public ClearTheMainCampObjective(Mission mission, List<Agent>agents) : base(mission)` | constructor |
| `GetCurrentProgress` | `public override MissionObjectiveProgressInfo GetCurrentProgress()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObjective](../../mission-ext/MissionObjective/)
- [same namespace LocateTheMainCampObjective](../LocateTheMainCampObjective/)
