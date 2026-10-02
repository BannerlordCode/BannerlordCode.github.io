---
title: "TownHorseRaceMissionController"
description: "TownHorseRaceMissionController：SandBox 的 public 类，继承 MissionLogic、ITournamentGameBehavior；公开成员 11 个（方法 6、属性 2、字段 1）。源文件 SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs。"
---
# TownHorseRaceMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs`

## 概述

TownHorseRaceMissionController 位于 SandBox 模块，源文件 SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs。它是一个 public 类，实现/继承 MissionLogic、ITournamentGameBehavior，继承链为 TownHorseRaceMissionController → MissionLogic。public/protected 成员共 11 个：6 方法、2 属性、1 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownHorseRaceMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Tournaments.MissionLogics），继承链 TownHorseRaceMissionController → MissionLogic。成员构成以方法为主（方法 6/11，属性 2/11），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<TownHorseRaceMissionController.CheckPoint>CheckPoints` | 属性 |
| `TownHorseRaceMissionController` | `public TownHorseRaceMissionController(CultureObject culture)` | 构造函数 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `StartMatch` | `public void StartMatch(TournamentMatch match, bool isLastRound)` | 方法 |
| `SkipMatch` | `public void SkipMatch(TournamentMatch match)` | 方法 |
| `IsMatchEnded` | `public bool IsMatchEnded()` | 方法 |
| `OnMatchEnded` | `public void OnMatchEnded()` | 方法 |
| `TourCount` | `public const int TourCount` | 字段 |
| `CheckPoint` | `public class CheckPoint` | 属性 |
| `CheckPoint` | `public class CheckPoint` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ITournamentGameBehavior](../ITournamentGameBehavior)
- [同命名空间 TournamentArcheryMissionController](../TournamentArcheryMissionController)
- [同命名空间 TournamentBehavior](../TournamentBehavior)
- [同命名空间 TournamentFightMissionController](../TournamentFightMissionController)
- [同命名空间 TournamentJoustingMissionController](../TournamentJoustingMissionController)
