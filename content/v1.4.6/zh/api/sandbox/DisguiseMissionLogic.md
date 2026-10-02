---
title: "DisguiseMissionLogic"
description: "DisguiseMissionLogic：SandBox 的 public 类，继承 MissionLogic、IPlayerInputEffector；公开成员 24 个（方法 15、属性 3、字段 4）。源文件 SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs。"
---
# DisguiseMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`

## 概述

DisguiseMissionLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic、IPlayerInputEffector、IMissionBehavior，继承链为 DisguiseMissionLogic → MissionLogic。public/protected 成员共 24 个：15 方法、3 属性、4 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DisguiseMissionLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 DisguiseMissionLogic → MissionLogic。成员构成以方法为主（方法 15/24，属性 3/24），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInStealthMode` | `public bool IsInStealthMode` | 属性 |
| `DisguiseMissionLogic.ShadowingAgentOffenseInfo>ThreatAgentInfos` | `public ReadOnlyDictionary<Agent, DisguiseMissionLogic.ShadowingAgentOffenseInfo>ThreatAgentInfos` | 属性 |
| `DisguiseMissionLogic` | `public DisguiseMissionLogic(CharacterObject contractorCharacter, Location fromLocation, bool willSetUpContact)` | 构造函数 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `GetSpawnFrameOfPassage` | `public MatrixFrame GetSpawnFrameOfPassage(Location location)` | 方法 |
| `IsContactAgentTracked` | `public bool IsContactAgentTracked(Agent agent)` | 方法 |
| `CanCommonAreaFightBeTriggered` | `public bool CanCommonAreaFightBeTriggered()` | 方法 |
| `ContactAlreadySetCommonCondition` | `public bool ContactAlreadySetCommonCondition()` | 方法 |
| `IsOnLeftSide` | `public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `SpawnDisguiseMissionAgentInternal` | `public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `GetAgentOffenseInfo` | `public DisguiseMissionLogic.ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)` | 方法 |
| `IsAgentInDetectionRadius` | `public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |
| `OnCollectPlayerEventControlFlags` | `public Agent.EventControlFlag OnCollectPlayerEventControlFlags()` | 方法 |
| `PlayerSuspiciousLevelMin` | `public const float PlayerSuspiciousLevelMin` | 字段 |
| `PlayerSuspiciousLevelMax` | `public const float PlayerSuspiciousLevelMax` | 字段 |
| `ToggleStealthModeSuspiciousThreshold` | `public const float ToggleStealthModeSuspiciousThreshold` | 字段 |
| `MissionFailDistanceToTargetAgent` | `public const float MissionFailDistanceToTargetAgent` | 字段 |
| `ShadowingAgentOffenseInfo` | `public class ShadowingAgentOffenseInfo` | 属性 |
| `ShadowingAgentOffenseInfo` | `public class ShadowingAgentOffenseInfo` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
