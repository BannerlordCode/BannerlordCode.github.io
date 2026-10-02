---
title: "CampaignSiegeStateHandler"
description: "CampaignSiegeStateHandler: a public class in SandBox, inheriting MissionLogic; 8 exposed members (4 methods, 3 properties, 0 fields). Source: SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs."
---
# CampaignSiegeStateHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs`

## Overview

CampaignSiegeStateHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CampaignSiegeStateHandler → MissionLogic. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignSiegeStateHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain CampaignSiegeStateHandler → MissionLogic. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSiege` | `public bool IsSiege` | property |
| `IsSallyOut` | `public bool IsSallyOut` | property |
| `Settlement` | `public Settlement Settlement` | property |
| `CampaignSiegeStateHandler` | `public CampaignSiegeStateHandler()` | constructor |
| `OnRetreatMission` | `public override void OnRetreatMission()` | method |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | method |
| `OnSurrenderMission` | `public override void OnSurrenderMission()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController)
