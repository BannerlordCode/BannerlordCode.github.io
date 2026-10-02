---
title: "MusicSilencedMissionView"
description: "MusicSilencedMissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView, IMusicHandler; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs."
---
# MusicSilencedMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Sound`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MusicSilencedMissionView : MissionView, IMusicHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs`

## Overview

MusicSilencedMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs. It is a public class, implementing/inheriting MissionView, IMusicHandler; the inheritance chain is MusicSilencedMissionView → MissionView → MissionBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicSilencedMissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Sound) the module directory; inheritance chain MusicSilencedMissionView → MissionView → MissionBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MusicBattleMissionView](../MusicBattleMissionView)
- [same namespace MusicStealthMissionView](../MusicStealthMissionView)
