---
title: "TournamentMissionStarter"
description: "TournamentMissionStarter：SandBox.Tournaments 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Tournaments/TournamentMissionStarter.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentMissionStarter

**Namespace:** `SandBox.Tournaments`
**Module:** `SandBox`
**Type:** `public static class TournamentMissionStarter`
**File:** `SandBox/Tournaments/TournamentMissionStarter.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TournamentMissionStarter 位于 SandBox 模块，源文件 SandBox/Tournaments/TournamentMissionStarter.cs。它是一个 public 类，继承链为 TournamentMissionStarter。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentMissionStarter 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Tournaments`，继承链 TournamentMissionStarter。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/TournamentMissionStarter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OpenTournamentArcheryMission` | `public static Mission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenTournamentFightMission` | `public static Mission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenTournamentHorseRaceMission` | `public static Mission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenTournamentJoustingMission` | `public static Mission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenBattleChallengeMission` | `public static Mission OpenBattleChallengeMission(string scene, IList<Hero>priorityCharsAttacker, IList<Hero>priorityCharsDefender)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ITournamentGameBehavior](../ITournamentGameBehavior/)
