---
title: "MusicStealthMissionView"
description: "MusicStealthMissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView, IMusicHandler; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs."
---
# MusicStealthMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Sound`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MusicStealthMissionView : MissionView, IMusicHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs`

## Overview

MusicStealthMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs. It is a public class, implementing/inheriting MissionView, IMusicHandler; the inheritance chain is MusicStealthMissionView → MissionView → MissionBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicStealthMissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Sound) the module directory; inheritance chain MusicStealthMissionView → MissionView → MissionBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MusicBattleMissionView](../MusicBattleMissionView)
- [same namespace MusicSilencedMissionView](../MusicSilencedMissionView)
