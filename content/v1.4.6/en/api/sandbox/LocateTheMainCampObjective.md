---
title: "LocateTheMainCampObjective"
description: "LocateTheMainCampObjective: a public class in SandBox, inheriting MissionObjective; 4 exposed members (0 methods, 3 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs."
---
# LocateTheMainCampObjective

**Namespace:** `SandBox.Missions.MissionLogics.Hideout.Objectives`
**Module:** `SandBox`
**Type:** `public class LocateTheMainCampObjective : MissionObjective`
**File:** `SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs`

## Overview

LocateTheMainCampObjective lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs. It is a public class, implementing/inheriting MissionObjective; the inheritance chain is LocateTheMainCampObjective → MissionObjective. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocateTheMainCampObjective is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Hideout.Objectives) the module directory; inheritance chain LocateTheMainCampObjective → MissionObjective. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. MissionObjective on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UniqueId` | `public override string UniqueId` | property |
| `Name` | `public override TextObject Name` | property |
| `Description` | `public override TextObject Description` | property |
| `LocateTheMainCampObjective` | `public LocateTheMainCampObjective(Mission mission) : base(mission)` | constructor |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClearTheMainCampObjective](../ClearTheMainCampObjective)
