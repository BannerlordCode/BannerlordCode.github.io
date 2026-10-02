---
title: "MusicBattleMissionView"
description: "MusicBattleMissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView, IMusicHandler; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs."
---
# MusicBattleMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Sound`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MusicBattleMissionView : MissionView, IMusicHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs`

## Overview

MusicBattleMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs. It is a public class, implementing/inheriting MissionView, IMusicHandler; the inheritance chain is MusicBattleMissionView → MissionView → MissionBehavior. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicBattleMissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Sound) the module directory; inheritance chain MusicBattleMissionView → MissionView → MissionBehavior. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MusicBattleMissionView` | `public MusicBattleMissionView(bool isSiegeBattle)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MusicSilencedMissionView](../MusicSilencedMissionView)
- [same namespace MusicStealthMissionView](../MusicStealthMissionView)
