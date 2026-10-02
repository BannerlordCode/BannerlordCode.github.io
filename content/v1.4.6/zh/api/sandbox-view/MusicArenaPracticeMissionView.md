---
title: "MusicArenaPracticeMissionView"
description: "MusicArenaPracticeMissionView：SandBox.View 的 public 类，继承 MissionView、IMusicHandler；公开成员 9 个（方法 9、属性 0、字段 0）。源文件 SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs。"
---
# MusicArenaPracticeMissionView

**Namespace:** `SandBox.View.Missions.Sound.Components`
**Module:** `SandBox.View`
**Type:** `public class MusicArenaPracticeMissionView : MissionView, IMusicHandler`
**File:** `SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs`

## 概述

MusicArenaPracticeMissionView 位于 SandBox.View 模块，源文件 SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs。它是一个 public 类，实现/继承 MissionView、IMusicHandler，继承链为 MusicArenaPracticeMissionView → MissionView。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MusicArenaPracticeMissionView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions.Sound.Components），继承链 MusicArenaPracticeMissionView → MissionView。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `OnMissileHit` | `public override void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 方法 |
| `OnMeleeHit` | `public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 方法 |
| `OnUpdated` | `public void OnUpdated(float dt)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MusicTournamentMissionView](../MusicTournamentMissionView)
