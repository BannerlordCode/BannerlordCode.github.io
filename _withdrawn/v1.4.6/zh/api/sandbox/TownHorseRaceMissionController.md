---
title: "TownHorseRaceMissionController"
description: "TownHorseRaceMissionController：SandBox.Tournaments.MissionLogics 的 public 类，继承 MissionLogic、ITournamentGameBehavior；公开成员 11 个（方法 6、属性 2、字段 1）。canonical 桶 sandbox。源文件 SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TownHorseRaceMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TownHorseRaceMissionController 位于 SandBox 模块，源文件 SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs。它是一个 public 类，实现/继承 MissionLogic、ITournamentGameBehavior，继承链为 TownHorseRaceMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 11 个：6 方法、2 属性、1 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownHorseRaceMissionController 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Tournaments.MissionLogics`，继承链 TownHorseRaceMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 6/11，属性 2/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [基类/接口 ITournamentGameBehavior](../ITournamentGameBehavior/)
- [同命名空间 TournamentArcheryMissionController](../TournamentArcheryMissionController/)
- [同命名空间 TournamentBehavior](../TournamentBehavior/)
- [同命名空间 TournamentFightMissionController](../TournamentFightMissionController/)
- [同命名空间 TournamentJoustingMissionController](../TournamentJoustingMissionController/)
