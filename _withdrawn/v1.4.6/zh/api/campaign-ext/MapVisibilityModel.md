---
title: "MapVisibilityModel"
description: "MapVisibilityModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MapVisibilityModel>；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapVisibilityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MapVisibilityModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MapVisibilityModel>，继承链为 MapVisibilityModel → MBGameModel → GameModel。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapVisibilityModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MapVisibilityModel → MBGameModel → GameModel。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSeeingRange` | `public abstract float MaximumSeeingRange();` | 方法 |
| `GetPartySeeingRangeBase` | `public abstract float GetPartySeeingRangeBase(MobileParty party);` | 方法 |
| `GetPartySpottingRange` | `public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false);` | 方法 |
| `GetPartySpottingRatioForMainPartySeeingRange` | `public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party);` | 方法 |
| `GetHideoutSpottingDistance` | `public abstract float GetHideoutSpottingDistance();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
