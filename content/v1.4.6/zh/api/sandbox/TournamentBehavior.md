---
title: "TournamentBehavior"
description: "TournamentBehavior：SandBox 的 public 类，继承 MissionLogic、ICameraModeLogic；公开成员 36 个（方法 13、属性 16、字段 5）。源文件 SandBox/Tournaments/MissionLogics/TournamentBehavior.cs。"
---
# TournamentBehavior

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentBehavior.cs`

## 概述

TournamentBehavior 位于 SandBox 模块，源文件 SandBox/Tournaments/MissionLogics/TournamentBehavior.cs。它是一个 public 类，实现/继承 MissionLogic、ICameraModeLogic，继承链为 TournamentBehavior → MissionLogic。public/protected 成员共 36 个：13 方法、16 属性、5 字段、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Tournaments.MissionLogics），继承链 TournamentBehavior → MissionLogic。成员构成以属性为主（属性 16/36，方法 13/36），对外主要以状态读取接口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/MissionLogics/TournamentBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentGame` | `public TournamentGame TournamentGame` | 属性 |
| `TournamentRound[]Rounds` | `public TournamentRound[]Rounds` | 属性 |
| `GetMissionCameraLockMode` | `public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)` | 方法 |
| `IsPlayerEliminated` | `public bool IsPlayerEliminated` | 属性 |
| `CurrentRoundIndex` | `public int CurrentRoundIndex` | 属性 |
| `LastMatch` | `public TournamentMatch LastMatch` | 属性 |
| `CurrentRound` | `public TournamentRound CurrentRound` | 属性 |
| `NextRound` | `public TournamentRound NextRound` | 属性 |
| `CurrentMatch` | `public TournamentMatch CurrentMatch` | 属性 |
| `Winner` | `public TournamentParticipant Winner` | 属性 |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating` | 属性 |
| `Settlement` | `public Settlement Settlement` | 属性 |
| `TournamentBehavior` | `public TournamentBehavior(TournamentGame tournamentGame, Settlement settlement, ITournamentGameBehavior gameBehavior, bool isPlayerParticipating)` | 构造函数 |
| `MBList` | `public MBList<CharacterObject>GetAllPossibleParticipants()` | 方法 |
| `DeleteTournamentSetsExcept` | `public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)` | 方法 |
| `DeleteAllTournamentSets` | `public static void DeleteAllTournamentSets()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `StartMatch` | `public void StartMatch()` | 方法 |
| `SkipMatch` | `public void SkipMatch(bool isLeave = false)` | 方法 |
| `EndTournamentViaLeave` | `public void EndTournamentViaLeave()` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |
| `BetOdd` | `public float BetOdd` | 属性 |
| `MaximumBetInstance` | `public int MaximumBetInstance` | 属性 |
| `BettedDenars` | `public int BettedDenars` | 属性 |
| `OverallExpectedDenars` | `public int OverallExpectedDenars` | 属性 |
| `PlayerDenars` | `public int PlayerDenars` | 属性 |
| `PlaceABet` | `public void PlaceABet(int bet)` | 方法 |
| `GetExpectedDenarsForBet` | `public int GetExpectedDenarsForBet(int bet)` | 方法 |
| `GetMaximumBet` | `public int GetMaximumBet()` | 方法 |
| `TournamentEnd;` | `public event Action TournamentEnd;` | 事件 |
| `RoundCount` | `public const int RoundCount` | 字段 |
| `ParticipantCount` | `public const int ParticipantCount` | 字段 |
| `EndMatchTimerDuration` | `public const float EndMatchTimerDuration` | 字段 |
| `CheerTimerDuration` | `public const float CheerTimerDuration` | 字段 |
| `MaximumOdd` | `public const float MaximumOdd` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TournamentArcheryMissionController](../TournamentArcheryMissionController)
- [同命名空间 TournamentFightMissionController](../TournamentFightMissionController)
- [同命名空间 TournamentJoustingMissionController](../TournamentJoustingMissionController)
- [同命名空间 TownHorseRaceMissionController](../TownHorseRaceMissionController)
