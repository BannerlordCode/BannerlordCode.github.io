---
title: "TeamAIGeneral"
description: "TeamAIGeneral: a public class in TaleWorlds.MountAndBlade, inheriting TeamAIComponent; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TeamAIGeneral.cs."
---
# TeamAIGeneral

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAIGeneral : TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAIGeneral.cs`

## Overview

TeamAIGeneral lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAIGeneral.cs. It is a public class, implementing/inheriting TeamAIComponent; the inheritance chain is TeamAIGeneral → TeamAIComponent. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAIGeneral is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAIGeneral → TeamAIComponent. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAIGeneral.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TeamAIGeneral` | `public TeamAIGeneral(Mission currentMission, Team currentTeam, float thinkTimerTime = 10f, float applyTimerTime = 1f) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `DebugTick` | `protected override void DebugTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TeamAIComponent](../TeamAIComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
