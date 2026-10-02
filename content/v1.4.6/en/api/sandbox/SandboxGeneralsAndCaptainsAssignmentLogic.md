---
title: "SandboxGeneralsAndCaptainsAssignmentLogic"
description: "SandboxGeneralsAndCaptainsAssignmentLogic: a public class in SandBox, inheriting GeneralsAndCaptainsAssignmentLogic; 2 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/SandboxGeneralsAndCaptainsAssignmentLogic.cs."
---
# SandboxGeneralsAndCaptainsAssignmentLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class SandboxGeneralsAndCaptainsAssignmentLogic : GeneralsAndCaptainsAssignmentLogic`
**File:** `SandBox/Missions/MissionLogics/SandboxGeneralsAndCaptainsAssignmentLogic.cs`

## Overview

SandboxGeneralsAndCaptainsAssignmentLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/SandboxGeneralsAndCaptainsAssignmentLogic.cs. It is a public class, implementing/inheriting GeneralsAndCaptainsAssignmentLogic; the inheritance chain is SandboxGeneralsAndCaptainsAssignmentLogic → GeneralsAndCaptainsAssignmentLogic. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxGeneralsAndCaptainsAssignmentLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain SandboxGeneralsAndCaptainsAssignmentLogic → GeneralsAndCaptainsAssignmentLogic. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. GeneralsAndCaptainsAssignmentLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/SandboxGeneralsAndCaptainsAssignmentLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandboxGeneralsAndCaptainsAssignmentLogic` | `public SandboxGeneralsAndCaptainsAssignmentLogic(TextObject attackerGeneralName, TextObject defenderGeneralName, TextObject attackerAllyGeneralName = null, TextObject defenderAllyGeneralName = null, bool createBodyguard = true) : base(attackerGeneralName, defenderGeneralName, attackerAllyGeneralName, defenderAllyGeneralName, createBodyguard)` | constructor |
| `SortCaptainsByPriority` | `protected override void SortCaptainsByPriority(Team team, ref List<Agent>captains)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
