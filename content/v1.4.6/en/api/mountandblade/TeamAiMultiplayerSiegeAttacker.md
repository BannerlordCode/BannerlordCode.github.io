---
title: "TeamAiMultiplayerSiegeAttacker"
description: "TeamAiMultiplayerSiegeAttacker: a public class in TaleWorlds.MountAndBlade, inheriting TeamAISiegeComponent; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TeamAiMultiplayerSiegeAttacker.cs."
---
# TeamAiMultiplayerSiegeAttacker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAiMultiplayerSiegeAttacker : TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAiMultiplayerSiegeAttacker.cs`

## Overview

TeamAiMultiplayerSiegeAttacker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAiMultiplayerSiegeAttacker.cs. It is a public class, implementing/inheriting TeamAISiegeComponent; the inheritance chain is TeamAiMultiplayerSiegeAttacker → TeamAISiegeComponent → TeamAIComponent. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAiMultiplayerSiegeAttacker is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAiMultiplayerSiegeAttacker → TeamAISiegeComponent → TeamAIComponent. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAiMultiplayerSiegeAttacker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TeamAiMultiplayerSiegeAttacker` | `public TeamAiMultiplayerSiegeAttacker(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TeamAISiegeComponent](../TeamAISiegeComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
