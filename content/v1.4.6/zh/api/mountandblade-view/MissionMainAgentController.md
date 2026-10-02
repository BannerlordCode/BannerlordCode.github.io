---
title: "MissionMainAgentController"
description: "MissionMainAgentController：TaleWorlds.MountAndBlade.View 的 public 类，继承 MissionView；公开成员 27 个（方法 15、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs。"
---
# MissionMainAgentController

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionMainAgentController : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs`

## 概述

MissionMainAgentController 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionMainAgentController → MissionView → MissionBehavior。public/protected 成员共 27 个：15 方法、6 属性、2 事件、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentController 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews），继承链 MissionMainAgentController → MissionView → MissionBehavior。成员构成以方法为主（方法 15/27，属性 6/27），对外主要以操作入口暴露。继承链上的 MissionBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnLockedAgentChanged;` | `public event MissionMainAgentController.OnLockedAgentChangedDelegate OnLockedAgentChanged;` | 事件 |
| `OnPotentialLockedAgentChanged;` | `public event MissionMainAgentController.OnPotentialLockedAgentChangedDelegate OnPotentialLockedAgentChanged;` | 事件 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `CustomLookDir` | `public Vec3 CustomLookDir` | 属性 |
| `IsPlayerAiming` | `public bool IsPlayerAiming` | 属性 |
| `LockedAgent` | `public Agent LockedAgent` | 属性 |
| `PotentialLockTargetAgent` | `public Agent PotentialLockTargetAgent` | 属性 |
| `MissionMainAgentController` | `public MissionMainAgentController()` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `IsReady` | `public override bool IsReady()` | 方法 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnAgentDeleted` | `public override void OnAgentDeleted(Agent affectedAgent)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `BreakAgentVisualsInvulnerability` | `public void BreakAgentVisualsInvulnerability()` | 方法 |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 方法 |
| `Disable` | `public void Disable()` | 方法 |
| `Enable` | `public void Enable()` | 方法 |
| `OnWeaponUsageToggleRequested` | `public void OnWeaponUsageToggleRequested()` | 方法 |
| `AddOverrideControlsForFrame` | `public void AddOverrideControlsForFrame(MissionMainAgentController.OverrideMainAgentControlFlag overrideFlag)` | 方法 |
| `OverrideMainAgentControlFlag` | `public enum OverrideMainAgentControlFlag` | 属性 |
| `OnLockedAgentChangedDelegate` | `public delegate void OnLockedAgentChangedDelegate(Agent newAgent);` | 方法 |
| `OnPotentialLockedAgentChangedDelegate` | `public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent);` | 方法 |
| `OverrideMainAgentControlFlag` | `public enum OverrideMainAgentControlFlag` | 嵌套类型 |
| `OnLockedAgentChangedDelegate` | `public delegate void OnLockedAgentChangedDelegate(Agent newAgent)` | 嵌套类型 |
| `OnPotentialLockedAgentChangedDelegate` | `public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent)` | 嵌套类型 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionView](../MissionView)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView)
