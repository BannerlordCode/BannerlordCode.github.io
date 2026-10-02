---
title: "MissionTournamentJoustingView"
description: "MissionTournamentJoustingView: a public class in SandBox.View, inheriting MissionView; 6 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs."
---
# MissionTournamentJoustingView

**Namespace:** `SandBox.View.Missions.Tournaments`
**Module:** `SandBox.View`
**Type:** `public class MissionTournamentJoustingView : MissionView`
**File:** `SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs`

## Overview

MissionTournamentJoustingView lives in the SandBox.View module, source file SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionTournamentJoustingView → MissionView. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTournamentJoustingView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.Tournaments) the module directory; inheritance chain MissionTournamentJoustingView → MissionView. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `ShowMessage` | `public void ShowMessage(string str, float duration, bool hasPriority = true)` | method |
| `ShowMessage` | `public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)` | method |
| `DeleteMessage` | `public void DeleteMessage(string str)` | method |
| `DeleteMessage` | `public void DeleteMessage(Agent agent, string str)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionTournamentView](../MissionTournamentView)
- [same namespace TournamentMissionViews](../TournamentMissionViews)
