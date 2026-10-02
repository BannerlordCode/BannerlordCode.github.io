---
title: "MissionMultiplayerSiegeClient"
description: "MissionMultiplayerSiegeClient 的自动生成类参考。"
---
# MissionMultiplayerSiegeClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiegeClient : MissionMultiplayerGameModeBaseClient,ICommanderInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBaseClient,ICommanderInfo,IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs

## 概述

`MissionMultiplayerSiegeClient` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AfterStart
`public override void AfterStart() `

### GetGoldAmount
`public override int GetGoldAmount() `

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative,int goldAmount) `

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged() `

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint,Team ownerTeam) `

### OnMoraleChanged
`public void OnMoraleChanged(int attackerMorale,int defenderMorale,int[] capturePointRemainingMoraleGains) `

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag) `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
