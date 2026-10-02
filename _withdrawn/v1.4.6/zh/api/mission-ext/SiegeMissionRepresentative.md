---
title: "SiegeMissionRepresentative"
description: "SiegeMissionRepresentative：TaleWorlds.MountAndBlade.MissionRepresentatives 的 public 类，继承 MissionRepresentativeBase；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeMissionRepresentative 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs。它是一个 public 类，实现/继承 MissionRepresentativeBase，继承链为 SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeMissionRepresentative 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives`，继承链 SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | 方法 |
| `GetGoldGainsFromKillDataAndUpdateFlags` | `public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)` | 方法 |
| `GetGoldGainsFromObjectiveAssist` | `public int GetGoldGainsFromObjectiveAssist(GameEntity objectiveMostParentEntity, float contributionRatio, bool isCompleted)` | 方法 |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionRepresentativeBase](../MissionRepresentativeBase/)
- [同命名空间 DuelMissionRepresentative](../DuelMissionRepresentative/)
- [同命名空间 FFAMissionRepresentative](../FFAMissionRepresentative/)
- [同命名空间 FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative/)
- [同命名空间 TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative/)
