---
title: "MapTrackModel"
description: "MapTrackModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MapTrackModel>；公开成员 11 个（方法 10、属性 1、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTrackModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MapTrackModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MapTrackModel>，继承链为 MapTrackModel → MBGameModel → GameModel。public/protected 成员共 11 个：10 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapTrackModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MapTrackModel → MBGameModel → GameModel。成员构成以方法为主（方法 10/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxTrackLife` | `public abstract float MaxTrackLife` | 属性 |
| `GetSkipTrackChance` | `public abstract float GetSkipTrackChance(MobileParty mobileParty);` | 方法 |
| `GetMaxTrackSpottingDistanceForMainParty` | `public abstract float GetMaxTrackSpottingDistanceForMainParty();` | 方法 |
| `CanPartyLeaveTrack` | `public abstract bool CanPartyLeaveTrack(MobileParty mobileParty);` | 方法 |
| `GetTrackDetectionDifficultyForMainParty` | `public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance);` | 方法 |
| `GetSkillFromTrackDetected` | `public abstract float GetSkillFromTrackDetected(Track track);` | 方法 |
| `GetTrackLife` | `public abstract int GetTrackLife(MobileParty mobileParty);` | 方法 |
| `TrackTitle` | `public abstract TextObject TrackTitle(Track track);` | 方法 |
| `string>>GetTrackDescription` | `public abstract IEnumerable<ValueTuple<TextObject, string>>GetTrackDescription(Track track);` | 方法 |
| `GetTrackColor` | `public abstract uint GetTrackColor(Track track);` | 方法 |
| `GetTrackScale` | `public abstract float GetTrackScale(Track track);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
