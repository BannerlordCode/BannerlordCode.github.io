---
title: "SiegeMissionRepresentative"
description: "SiegeMissionRepresentative：TaleWorlds.MountAndBlade 的 public 类，继承 MissionRepresentativeBase；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs。"
---
# SiegeMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs`

## 概述

SiegeMissionRepresentative 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs。它是一个 public 类，实现/继承 MissionRepresentativeBase，继承链为 SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeMissionRepresentative 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.MissionRepresentatives），继承链 SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 PeerComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | 方法 |
| `GetGoldGainsFromKillDataAndUpdateFlags` | `public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)` | 方法 |
| `GetGoldGainsFromObjectiveAssist` | `public int GetGoldGainsFromObjectiveAssist(GameEntity objectiveMostParentEntity, float contributionRatio, bool isCompleted)` | 方法 |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionRepresentativeBase](../MissionRepresentativeBase)
- [同命名空间 DuelMissionRepresentative](../DuelMissionRepresentative)
- [同命名空间 FFAMissionRepresentative](../FFAMissionRepresentative)
- [同命名空间 FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative)
- [同命名空间 TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative)
