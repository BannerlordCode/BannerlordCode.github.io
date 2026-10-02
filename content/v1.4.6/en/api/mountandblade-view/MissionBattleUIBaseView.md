---
title: "MissionBattleUIBaseView"
description: "MissionBattleUIBaseView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 8 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs."
---
# MissionBattleUIBaseView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`

## Overview

MissionBattleUIBaseView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs. It is a public class (abstract), implementing/inheriting MissionView; the inheritance chain is MissionBattleUIBaseView → MissionView → MissionBehavior. It exposes 8 public/protected members: 7 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionBattleUIBaseView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionBattleUIBaseView → MissionView → MissionBehavior. The surface is method-led (methods 7/8, properties 1/8), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsViewCreated` | `public bool IsViewCreated` | property |
| `OnCreateView` | `protected abstract void OnCreateView();` | method |
| `OnDestroyView` | `protected abstract void OnDestroyView();` | method |
| `OnSuspendView` | `protected abstract override void OnSuspendView();` | method |
| `OnResumeView` | `protected abstract override void OnResumeView();` | method |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBoundaryCrossingView](../MissionBoundaryCrossingView)
