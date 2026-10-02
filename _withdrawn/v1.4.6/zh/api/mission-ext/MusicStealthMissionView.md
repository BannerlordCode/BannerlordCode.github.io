---
title: "MusicStealthMissionView"
description: "MusicStealthMissionView：TaleWorlds.MountAndBlade.View.MissionViews.Sound 的 public 类，继承 MissionView、IMusicHandler；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MusicStealthMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Sound`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MusicStealthMissionView : MissionView, IMusicHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MusicStealthMissionView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs。它是一个 public 类，实现/继承 MissionView、IMusicHandler，继承链为 MusicStealthMissionView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MusicStealthMissionView 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Sound`，继承链 MusicStealthMissionView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | 方法 |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../MissionView/)
- [基类/接口 IMusicHandler](../IMusicHandler/)
- [同命名空间 MusicBattleMissionView](../MusicBattleMissionView/)
- [同命名空间 MusicSilencedMissionView](../MusicSilencedMissionView/)
