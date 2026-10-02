---
title: "MissionView"
description: "MissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionBehavior; 27 exposed members (23 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs."
---
# MissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionView : MissionBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs`

## Overview

MissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs. It is a public class (abstract), implementing/inheriting MissionBehavior; the inheritance chain is MissionView → MissionBehavior. It exposes 27 public/protected members: 23 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionView → MissionBehavior. The surface is method-led (methods 23/27, properties 4/27), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionScreen` | `public MissionScreen MissionScreen` | property |
| `Input` | `public IInputContext Input` | property |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | property |
| `IsFinalized` | `public bool IsFinalized` | property |
| `OnMissionScreenTick` | `public virtual void OnMissionScreenTick(float dt)` | method |
| `OnEscape` | `public virtual bool OnEscape()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `IsPhotoModeAllowed` | `public virtual bool IsPhotoModeAllowed()` | method |
| `OnFocusChangeOnGameWindow` | `public virtual void OnFocusChangeOnGameWindow(bool focusGained)` | method |
| `OnSceneRenderingStarted` | `public virtual void OnSceneRenderingStarted()` | method |
| `OnMissionScreenInitialize` | `public virtual void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public virtual void OnMissionScreenFinalize()` | method |
| `OnMissionScreenActivate` | `public virtual void OnMissionScreenActivate()` | method |
| `OnMissionScreenDeactivate` | `public virtual void OnMissionScreenDeactivate()` | method |
| `UpdateOverridenCamera` | `public virtual bool UpdateOverridenCamera(float dt)` | method |
| `IsReady` | `public virtual bool IsReady()` | method |
| `OnPhotoModeActivated` | `public virtual void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public virtual void OnPhotoModeDeactivated()` | method |
| `OnConversationBegin` | `public virtual void OnConversationBegin()` | method |
| `OnConversationEnd` | `public virtual void OnConversationEnd()` | method |
| `OnSuspendView` | `protected virtual void OnSuspendView()` | method |
| `OnResumeView` | `protected virtual void OnResumeView()` | method |
| `OnDeploymentPlanMade` | `public virtual void OnDeploymentPlanMade(Team team, bool isFirstPlan)` | method |
| `SuspendView` | `public void SuspendView()` | method |
| `ResumeView` | `public void ResumeView()` | method |
| `OnEndMissionInternal` | `public sealed override void OnEndMissionInternal()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
