---
title: "BasicMissionHandler"
description: "BasicMissionHandler: a public class in TaleWorlds.MountAndBlade.Source.Missions.Handlers, inheriting MissionLogic; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BasicMissionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BasicMissionHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BasicMissionHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BasicMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicMissionHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Source.Missions.Handlers`, inheritance chain BasicMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `CreateWarningWidgetForResult` | `public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace IBoardGameHandler](../IBoardGameHandler/)
- [same namespace LordsHallFightMissionController](../LordsHallFightMissionController/)
- [same namespace MissionFacialAnimationHandler](../MissionFacialAnimationHandler/)
