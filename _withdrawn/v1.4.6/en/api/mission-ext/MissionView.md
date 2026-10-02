---
title: "MissionView"
description: "MissionView: a public class in TaleWorlds.MountAndBlade.View.MissionViews, inheriting MissionBehavior; 27 exposed members (23 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionView : MissionBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs. It is a public class (abstract), implementing/inheriting MissionBehavior; the inheritance chain is MissionView → MissionBehavior → IMissionBehavior. It exposes 27 public/protected members: 23 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews`, inheritance chain MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 23/27, properties 4/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView/)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView/)
