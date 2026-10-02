---
title: "ClearTheMainCampObjective"
description: "ClearTheMainCampObjective: a public class in SandBox, inheriting MissionObjective; 5 exposed members (1 methods, 3 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs."
---
# ClearTheMainCampObjective

**Namespace:** `SandBox.Missions.MissionLogics.Hideout.Objectives`
**Module:** `SandBox`
**Type:** `public class ClearTheMainCampObjective : MissionObjective`
**File:** `SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs`

## Overview

ClearTheMainCampObjective lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs. It is a public class, implementing/inheriting MissionObjective; the inheritance chain is ClearTheMainCampObjective → MissionObjective. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClearTheMainCampObjective is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Hideout.Objectives) the module directory; inheritance chain ClearTheMainCampObjective → MissionObjective. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. MissionObjective on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/Objectives/ClearTheMainCampObjective.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UniqueId` | `public override string UniqueId` | property |
| `Name` | `public override TextObject Name` | property |
| `Description` | `public override TextObject Description` | property |
| `ClearTheMainCampObjective` | `public ClearTheMainCampObjective(Mission mission, List<Agent>agents) : base(mission)` | constructor |
| `GetCurrentProgress` | `public override MissionObjectiveProgressInfo GetCurrentProgress()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace LocateTheMainCampObjective](../LocateTheMainCampObjective)
