---
title: "SPScoreboardUnitVM"
description: "SPScoreboardUnitVM：TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard 的 public 类，继承 ViewModel；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardUnitVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardUnitVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

SPScoreboardUnitVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPScoreboardUnitVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardUnitVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，继承链 SPScoreboardUnitVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardUnitVM` | `public SPScoreboardUnitVM(BasicCharacterObject character)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateScores` | `public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | 方法 |
| `UpdateHeroSkills` | `public void UpdateHeroSkills(SkillObject gainedSkill, int currentSkill)` | 方法 |
| `IsGainedAnySkills` | `public bool IsGainedAnySkills` | 属性 |
| `MBBindingList` | `public MBBindingList<SPScoreboardSkillItemVM>GainedSkills` | 属性 |
| `IsHero` | `public bool IsHero` | 属性 |
| `Score` | `public SPScoreboardStatsVM Score` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM/)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys/)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM/)
