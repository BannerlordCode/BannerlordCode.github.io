---
title: "StoryModeBanditDensityModel"
description: "StoryModeBanditDensityModel：StoryMode.GameComponents 的 public 类，继承 BanditDensityModel；公开成员 13 个（方法 4、属性 9、字段 0）。canonical 桶 storymode。源文件 StoryMode/GameComponents/StoryModeBanditDensityModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeBanditDensityModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**File:** `StoryMode/GameComponents/StoryModeBanditDensityModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModeBanditDensityModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModeBanditDensityModel.cs。它是一个 public 类，实现/继承 BanditDensityModel，继承链为 StoryModeBanditDensityModel → BanditDensityModel → MBGameModel → GameModel。public/protected 成员共 13 个：4 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeBanditDensityModel 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode.GameComponents`，继承链 StoryModeBanditDensityModel → BanditDensityModel → MBGameModel → GameModel。成员构成以属性为主（属性 9/13，方法 4/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModeBanditDensityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout` | 属性 |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout` | 属性 |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction` | 属性 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction` | 属性 |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | 属性 |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission` | 属性 |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout` | 属性 |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout` | 属性 |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission` | 属性 |
| `GetMaximumTroopCountForHideoutMission` | `public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 方法 |
| `IsPositionInsideNavalSafeZone` | `public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | 方法 |
| `GetMaxSupportedNumberOfLootersForClan` | `public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | 方法 |
| `GetMinimumTroopCountForHideoutMission` | `public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BanditDensityModel](../../campaign-ext/BanditDensityModel/)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
- [同命名空间 StoryModeCombatXpModel](../StoryModeCombatXpModel/)
