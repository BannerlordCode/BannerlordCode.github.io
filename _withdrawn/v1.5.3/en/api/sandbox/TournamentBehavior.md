---
title: "TournamentBehavior"
description: "Auto-generated class reference for TournamentBehavior."
---
# TournamentBehavior

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox
**Type:** `public class TournamentBehavior : MissionLogic,ICameraModeLogic `
**Base:** MissionLogic, ICameraModeLogic
**Source:** SandBox/Tournaments/MissionLogics/TournamentBehavior.cs

## Overview

Auto-generated stub for `TournamentBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetMissionCameraLockMode
`public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

### GetAllPossibleParticipants
`public MBList<CharacterObject> GetAllPossibleParticipants()`

### DeleteTournamentSetsExcept
`public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)`

### DeleteAllTournamentSets
`public static void DeleteAllTournamentSets()`

### AfterStart
`public override void AfterStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAfterMissionLoadingFinished
`public override void OnAfterMissionLoadingFinished()`

### StartMatch
`public void StartMatch()`

### SkipMatch
`public void SkipMatch(bool isLeave = false)`

### EndTournamentViaLeave
`public void EndTournamentViaLeave()`

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

### PlaceABet
`public void PlaceABet(int bet)`

### GetExpectedDenarsForBet
`public int GetExpectedDenarsForBet(int bet)`

### GetMaximumBet
`public int GetMaximumBet()`

## See Also

- [Section index](../)
