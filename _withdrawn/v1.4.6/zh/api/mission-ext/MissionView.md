---
title: "MissionView"
description: "MissionView：TaleWorlds.MountAndBlade.View.MissionViews 的 public 类，继承 MissionBehavior；公开成员 27 个（方法 23、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionView : MissionBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs。它是一个 public 类（abstract），实现/继承 MissionBehavior，继承链为 MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 27 个：23 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionView 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews`，继承链 MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 23/27，属性 4/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionScreen` | `public MissionScreen MissionScreen` | 属性 |
| `Input` | `public IInputContext Input` | 属性 |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | 属性 |
| `IsFinalized` | `public bool IsFinalized` | 属性 |
| `OnMissionScreenTick` | `public virtual void OnMissionScreenTick(float dt)` | 方法 |
| `OnEscape` | `public virtual bool OnEscape()` | 方法 |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | 方法 |
| `IsPhotoModeAllowed` | `public virtual bool IsPhotoModeAllowed()` | 方法 |
| `OnFocusChangeOnGameWindow` | `public virtual void OnFocusChangeOnGameWindow(bool focusGained)` | 方法 |
| `OnSceneRenderingStarted` | `public virtual void OnSceneRenderingStarted()` | 方法 |
| `OnMissionScreenInitialize` | `public virtual void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public virtual void OnMissionScreenFinalize()` | 方法 |
| `OnMissionScreenActivate` | `public virtual void OnMissionScreenActivate()` | 方法 |
| `OnMissionScreenDeactivate` | `public virtual void OnMissionScreenDeactivate()` | 方法 |
| `UpdateOverridenCamera` | `public virtual bool UpdateOverridenCamera(float dt)` | 方法 |
| `IsReady` | `public virtual bool IsReady()` | 方法 |
| `OnPhotoModeActivated` | `public virtual void OnPhotoModeActivated()` | 方法 |
| `OnPhotoModeDeactivated` | `public virtual void OnPhotoModeDeactivated()` | 方法 |
| `OnConversationBegin` | `public virtual void OnConversationBegin()` | 方法 |
| `OnConversationEnd` | `public virtual void OnConversationEnd()` | 方法 |
| `OnSuspendView` | `protected virtual void OnSuspendView()` | 方法 |
| `OnResumeView` | `protected virtual void OnResumeView()` | 方法 |
| `OnDeploymentPlanMade` | `public virtual void OnDeploymentPlanMade(Team team, bool isFirstPlan)` | 方法 |
| `SuspendView` | `public void SuspendView()` | 方法 |
| `ResumeView` | `public void ResumeView()` | 方法 |
| `OnEndMissionInternal` | `public sealed override void OnEndMissionInternal()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView/)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView/)
