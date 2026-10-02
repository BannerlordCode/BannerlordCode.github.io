---
title: "MissionGamepadEffectsView"
description: "MissionGamepadEffectsView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs."
---
# MissionGamepadEffectsView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionGamepadEffectsView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs`

## Overview

MissionGamepadEffectsView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGamepadEffectsView → MissionView → MissionBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGamepadEffectsView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionGamepadEffectsView → MissionView → MissionBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStateActivated` | `public override void OnMissionStateActivated()` | method |
| `OnMissionStateDeactivated` | `public override void OnMissionStateDeactivated()` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
