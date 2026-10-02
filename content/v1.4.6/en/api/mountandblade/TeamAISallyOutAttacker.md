---
title: "TeamAISallyOutAttacker"
description: "TeamAISallyOutAttacker: a public class in TaleWorlds.MountAndBlade, inheriting TeamAISiegeComponent; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TeamAISallyOutAttacker.cs."
---
# TeamAISallyOutAttacker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAISallyOutAttacker : TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISallyOutAttacker.cs`

## Overview

TeamAISallyOutAttacker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAISallyOutAttacker.cs. It is a public class, implementing/inheriting TeamAISiegeComponent; the inheritance chain is TeamAISallyOutAttacker → TeamAISiegeComponent → TeamAIComponent. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAISallyOutAttacker is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAISallyOutAttacker → TeamAISiegeComponent → TeamAIComponent. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAISallyOutAttacker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TeamAISallyOutAttacker` | `public TeamAISallyOutAttacker(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TeamAISiegeComponent](../TeamAISiegeComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
