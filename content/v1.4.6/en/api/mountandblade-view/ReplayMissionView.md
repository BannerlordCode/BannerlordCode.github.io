---
title: "ReplayMissionView"
description: "ReplayMissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs."
---
# ReplayMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ReplayMissionView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs`

## Overview

ReplayMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is ReplayMissionView → MissionView → MissionBehavior. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ReplayMissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain ReplayMissionView → MissionView → MissionBehavior. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `OverrideInput` | `public void OverrideInput(bool isOverridden)` | method |
| `ResetReplay` | `public void ResetReplay()` | method |
| `Rewind` | `public void Rewind(float time)` | method |
| `FastForward` | `public void FastForward(float time)` | method |
| `Pause` | `public void Pause()` | method |
| `Resume` | `public void Resume()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
