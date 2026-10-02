---
title: "FlagDominationMissionRepresentative"
description: "FlagDominationMissionRepresentative：TaleWorlds.MountAndBlade 的 public 类，继承 MissionRepresentativeBase；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs。"
---
# FlagDominationMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagDominationMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs`

## 概述

FlagDominationMissionRepresentative 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs。它是一个 public 类，实现/继承 MissionRepresentativeBase，继承链为 FlagDominationMissionRepresentative → MissionRepresentativeBase → PeerComponent。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FlagDominationMissionRepresentative 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.MissionRepresentatives），继承链 FlagDominationMissionRepresentative → MissionRepresentativeBase → PeerComponent。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。继承链上的 PeerComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGoldAmountForVisual` | `public int GetGoldAmountForVisual()` | 方法 |
| `UpdateSelectedClassServer` | `public void UpdateSelectedClassServer(Agent agent)` | 方法 |
| `CheckIfSurvivedLastRoundAndReset` | `public bool CheckIfSurvivedLastRoundAndReset()` | 方法 |
| `GetGoldGainsFromKillData` | `public int GetGoldGainsFromKillData(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isFriendly)` | 方法 |
| `GetGoldGainFromKillDataAndUpdateFlags` | `public int GetGoldGainFromKillDataAndUpdateFlags(MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist)` | 方法 |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionRepresentativeBase](../MissionRepresentativeBase)
- [同命名空间 DuelMissionRepresentative](../DuelMissionRepresentative)
- [同命名空间 FFAMissionRepresentative](../FFAMissionRepresentative)
- [同命名空间 SiegeMissionRepresentative](../SiegeMissionRepresentative)
- [同命名空间 TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative)
