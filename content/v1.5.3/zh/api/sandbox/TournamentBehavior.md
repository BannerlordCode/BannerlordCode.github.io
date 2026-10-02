---
title: "TournamentBehavior"
description: "TournamentBehavior 的自动生成类参考。"
---
# TournamentBehavior

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox
**Type:** `public class TournamentBehavior : MissionLogic,ICameraModeLogic `
**Base:** MissionLogic,ICameraModeLogic
**Source:** SandBox/Tournaments/MissionLogics/TournamentBehavior.cs

## 概述

`TournamentBehavior` 的自动生成类参考页面。声明来自 `SandBox/Tournaments/MissionLogics/TournamentBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMissionCameraLockMode
`public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer) `

### GetAllPossibleParticipants
`public MBList<CharacterObject> GetAllPossibleParticipants() `

### DeleteTournamentSetsExcept
`public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity) `

### DeleteAllTournamentSets
`public static void DeleteAllTournamentSets() `

### AfterStart
`public override void AfterStart() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnAfterMissionLoadingFinished
`public override void OnAfterMissionLoadingFinished() `

### StartMatch
`public void StartMatch() `

### SkipMatch
`public void SkipMatch(bool isLeave = false) `

### EndTournamentViaLeave
`public void EndTournamentViaLeave() `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave) `

### PlaceABet
`public void PlaceABet(int bet) `

### GetExpectedDenarsForBet
`public int GetExpectedDenarsForBet(int bet) `

### GetMaximumBet
`public int GetMaximumBet() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
