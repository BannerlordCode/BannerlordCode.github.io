---
title: "DefaultMapTrackModel"
description: "DefaultMapTrackModel：TaleWorlds.CampaignSystem 的 public 类，继承 MapTrackModel；公开成员 11 个（方法 10、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs。"
---
# DefaultMapTrackModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs`

## 概述

DefaultMapTrackModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs。它是一个 public 类，实现/继承 MapTrackModel，继承链为 DefaultMapTrackModel → MapTrackModel → MBGameModel。public/protected 成员共 11 个：10 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMapTrackModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultMapTrackModel → MapTrackModel → MBGameModel。成员构成以方法为主（方法 10/11，属性 1/11），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxTrackLife` | `public override float MaxTrackLife` | 属性 |
| `GetMaxTrackSpottingDistanceForMainParty` | `public override float GetMaxTrackSpottingDistanceForMainParty()` | 方法 |
| `CanPartyLeaveTrack` | `public override bool CanPartyLeaveTrack(MobileParty mobileParty)` | 方法 |
| `GetTrackLife` | `public override int GetTrackLife(MobileParty mobileParty)` | 方法 |
| `GetTrackDetectionDifficultyForMainParty` | `public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)` | 方法 |
| `GetSkillFromTrackDetected` | `public override float GetSkillFromTrackDetected(Track track)` | 方法 |
| `GetSkipTrackChance` | `public override float GetSkipTrackChance(MobileParty mobileParty)` | 方法 |
| `TrackTitle` | `public override TextObject TrackTitle(Track track)` | 方法 |
| `string>>GetTrackDescription` | `public override IEnumerable<ValueTuple<TextObject, string>>GetTrackDescription(Track track)` | 方法 |
| `GetTrackColor` | `public override uint GetTrackColor(Track track)` | 方法 |
| `GetTrackScale` | `public override float GetTrackScale(Track track)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MapTrackModel](../MapTrackModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
