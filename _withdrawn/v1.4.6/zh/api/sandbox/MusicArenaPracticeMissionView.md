---
title: "MusicArenaPracticeMissionView"
description: "MusicArenaPracticeMissionView：SandBox.View.Missions.Sound.Components 的 public 类，继承 MissionView、IMusicHandler；公开成员 9 个（方法 9、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MusicArenaPracticeMissionView

**Namespace:** `SandBox.View.Missions.Sound.Components`
**Module:** `SandBox.View`
**Type:** `public class MusicArenaPracticeMissionView : MissionView, IMusicHandler`
**File:** `SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MusicArenaPracticeMissionView 位于 SandBox.View 模块，源文件 SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs。它是一个 public 类，实现/继承 MissionView、IMusicHandler，继承链为 MusicArenaPracticeMissionView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MusicArenaPracticeMissionView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Missions.Sound.Components`，继承链 MusicArenaPracticeMissionView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../../mission-ext/MissionView/)
- [基类/接口 IMusicHandler](../../mission-ext/IMusicHandler/)
- [同命名空间 MusicTournamentMissionView](../MusicTournamentMissionView/)
