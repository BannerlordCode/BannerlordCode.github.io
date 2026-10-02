---
title: "TeamAISallyOutDefender"
description: "TeamAISallyOutDefender: a public class in TaleWorlds.MountAndBlade, inheriting TeamAISiegeComponent; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TeamAISallyOutDefender.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TeamAISallyOutDefender

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAISallyOutDefender : TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISallyOutDefender.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TeamAISallyOutDefender lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAISallyOutDefender.cs. It is a public class, implementing/inheriting TeamAISiegeComponent; the inheritance chain is TeamAISallyOutDefender → TeamAISiegeComponent → TeamAIComponent. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAISallyOutDefender lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TeamAISallyOutDefender → TeamAISiegeComponent → TeamAIComponent. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAISallyOutDefender.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public List<ArcherPosition>ArcherPositions` | property |
| `TeamAISallyOutDefender` | `public TeamAISallyOutDefender(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | method |
| `CalculateSallyOutReferencePosition` | `public Vec3 CalculateSallyOutReferencePosition(FormationAI.BehaviorSide side)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TeamAISiegeComponent](../TeamAISiegeComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
