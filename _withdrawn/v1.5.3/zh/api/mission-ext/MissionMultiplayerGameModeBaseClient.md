---
title: "MissionMultiplayerGameModeBaseClient"
description: "MissionMultiplayerGameModeBaseClient 的自动生成类参考。"
---
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork,ICameraModeLogic `
**Base:** MissionNetwork,ICameraModeLogic
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs

## 概述

`MissionMultiplayerGameModeBaseClient` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetGoldAmount
`public abstract int GetGoldAmount()`

### GetMissionCameraLockMode
`public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer) `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### EarlyStart
`public override void EarlyStart() `

### CheckTimer
`public bool CheckTimer(out int remainingTime,out int remainingWarningTime,bool forceUpdate = false) `

### GetWarningTimer
`protected virtual int GetWarningTimer() `

### OnGoldAmountChangedForRepresentative
`public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative,int goldAmount)`

### CanRequestTroopChange
`public virtual bool CanRequestTroopChange() `

### CanRequestCultureChange
`public virtual bool CanRequestCultureChange() `

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
