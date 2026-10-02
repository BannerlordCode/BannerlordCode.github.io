---
title: "BattleSimulation"
description: "BattleSimulation 的自动生成类参考。"
---
# BattleSimulation

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BattleSimulation : IBattleObserver `
**Base:** IBattleObserver
**Source:** TaleWorlds.CampaignSystem/BattleSimulation.cs

## 概述

`BattleSimulation` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/BattleSimulation.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Play
`public void Play() `

### FastForward
`public void FastForward() `

### Skip
`public void Skip() `

### Pause
`public void Pause() `

### OnFinished
`public void OnFinished() `

### OnPlayerRetreat
`public void OnPlayerRetreat() `

### Tick
`public void Tick(float dt) `

### ResetSimulation
`public void ResetSimulation() `

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side,IBattleCombatant battleCombatant,BasicCharacterObject character,int number = 0,int numberKilled = 0,int numberWounded = 0,int numberRouted = 0,int killCount = 0,int numberReadyToUpgrade = 0) `

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side,IBattleCombatant battleCombatant,BasicCharacterObject heroCharacter,SkillObject skill) `

### BattleResultsReady
`public void BattleResultsReady() `

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide,BattleSideEnum newSide,IBattleCombatant battleCombatant,BasicCharacterObject character) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
