---
title: "TeamAISiegeDefender"
description: "TeamAISiegeDefender: a public class in TaleWorlds.MountAndBlade, inheriting TeamAISiegeComponent; 5 exposed members (2 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs."
---
# TeamAISiegeDefender

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAISiegeDefender : TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs`

## Overview

TeamAISiegeDefender lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs. It is a public class, implementing/inheriting TeamAISiegeComponent; the inheritance chain is TeamAISiegeDefender → TeamAISiegeComponent → TeamAIComponent. It exposes 5 public/protected members: 2 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAISiegeDefender is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAISiegeDefender → TeamAISiegeComponent → TeamAIComponent. The surface is method-led (methods 2/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<ArcherPosition>ArcherPositions` | property |
| `TeamAISiegeDefender` | `public TeamAISiegeDefender(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `InsideEnemyThresholdRatio` | `public const float InsideEnemyThresholdRatio` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TeamAISiegeComponent](../TeamAISiegeComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
