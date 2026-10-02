---
title: "MissionCombatantsLogic"
description: "MissionCombatantsLogic 的自动生成类参考。"
---
# MissionCombatantsLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCombatantsLogic : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs

## 概述

`MissionCombatantsLogic` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SupportsAllyTeamOnPlayerSide
`public bool SupportsAllyTeamOnPlayerSide(out IBattleCombatant allyCombatant) `
`public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants,IBattleCombatant playerBattleCombatant,bool isPlayerSergeant,bool isNavalLandHybridMission,out IBattleCombatant allyCombatant) `

### GetBannerForSide
`public Banner GetBannerForSide(BattleSideEnum side) `

### GetCultureForPlayerSide
`public BasicCultureObject GetCultureForPlayerSide() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### EarlyStart
`public override void EarlyStart() `

### AfterStart
`public override void AfterStart() `

### GetAllCombatants
`public IEnumerable<IBattleCombatant> GetAllCombatants() `

### AddPlayerTeam
`protected void AddPlayerTeam(BattleSideEnum playerSide) `

### AddEnemyTeam
`protected void AddEnemyTeam(BattleSideEnum enemySide) `

### AddPlayerAllyTeam
`protected void AddPlayerAllyTeam(BattleSideEnum playerSide,IBattleCombatant allyCombatant) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
