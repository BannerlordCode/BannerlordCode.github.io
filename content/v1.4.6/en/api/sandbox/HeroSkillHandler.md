---
title: "HeroSkillHandler"
description: "HeroSkillHandler: a public class in SandBox, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/HeroSkillHandler.cs."
---
# HeroSkillHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class HeroSkillHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/HeroSkillHandler.cs`

## Overview

HeroSkillHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/HeroSkillHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HeroSkillHandler → MissionLogic. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroSkillHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain HeroSkillHandler → MissionLogic. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/HeroSkillHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
