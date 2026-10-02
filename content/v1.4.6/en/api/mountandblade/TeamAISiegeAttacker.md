---
title: "TeamAISiegeAttacker"
description: "TeamAISiegeAttacker: a public class in TaleWorlds.MountAndBlade, inheriting TeamAISiegeComponent; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TeamAISiegeAttacker.cs."
---
# TeamAISiegeAttacker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAISiegeAttacker : TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeAttacker.cs`

## Overview

TeamAISiegeAttacker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAISiegeAttacker.cs. It is a public class, implementing/inheriting TeamAISiegeComponent; the inheritance chain is TeamAISiegeAttacker → TeamAISiegeComponent → TeamAIComponent. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAISiegeAttacker is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAISiegeAttacker → TeamAISiegeComponent → TeamAIComponent. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAISiegeAttacker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<ArcherPosition>ArcherPositions` | property |
| `TeamAISiegeAttacker` | `public TeamAISiegeAttacker(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnFormationFrameChanged` | `public override void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TeamAISiegeComponent](../TeamAISiegeComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
