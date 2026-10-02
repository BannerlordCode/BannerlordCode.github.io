---
title: "BattleSimulation"
description: "BattleSimulation：TaleWorlds.CampaignSystem 的 public 类，继承 IBattleObserver；公开成员 19 个（方法 12、属性 5、字段 1）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/BattleSimulation.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleSimulation

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BattleSimulation : IBattleObserver`
**File:** `TaleWorlds.CampaignSystem/BattleSimulation.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

BattleSimulation 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/BattleSimulation.cs。它是一个 public 类，实现/继承 IBattleObserver，继承链为 BattleSimulation → IBattleObserver。public/protected 成员共 19 个：12 方法、5 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleSimulation 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 BattleSimulation → IBattleObserver。成员构成以方法为主（方法 12/19，属性 5/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/BattleSimulation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSimulationFinished` | `public bool IsSimulationFinished` | 属性 |
| `MapEvent` | `public MapEvent MapEvent` | 属性 |
| `IsPlayerRetreated` | `public bool IsPlayerRetreated` | 属性 |
| `BattleObserver` | `public IBattleObserver BattleObserver` | 属性 |
| `List` | `public List<List<BattleResultPartyData>>Teams` | 属性 |
| `BattleSimulation` | `public BattleSimulation(FlattenedTroopRoster selectedTroopsForPlayerSide, FlattenedTroopRoster selectedTroopsForOtherSide)` | 构造函数 |
| `Play` | `public void Play()` | 方法 |
| `FastForward` | `public void FastForward()` | 方法 |
| `Skip` | `public void Skip()` | 方法 |
| `Pause` | `public void Pause()` | 方法 |
| `OnFinished` | `public void OnFinished()` | 方法 |
| `OnPlayerRetreat` | `public void OnPlayerRetreat()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `ResetSimulation` | `public void ResetSimulation()` | 方法 |
| `TroopNumberChanged` | `public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)` | 方法 |
| `HeroSkillIncreased` | `public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)` | 方法 |
| `BattleResultsReady` | `public void BattleResultsReady()` | 方法 |
| `TroopSideChanged` | `public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)` | 方法 |
| `FlattenedTroopRoster[]SelectedTroops` | `public readonly FlattenedTroopRoster[]SelectedTroops` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IBattleObserver](../../core-extra/IBattleObserver/)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
