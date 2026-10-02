---
title: "DefaultHideoutModel"
description: "DefaultHideoutModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 HideoutModel；公开成员 6 个（方法 3、属性 3、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultHideoutModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHideoutModel : HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultHideoutModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs。它是一个 public 类，实现/继承 HideoutModel，继承链为 DefaultHideoutModel → HideoutModel → MBGameModel → GameModel。public/protected 成员共 6 个：3 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultHideoutModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultHideoutModel → HideoutModel → MBGameModel → GameModel。成员构成以方法为主（方法 3/6，属性 3/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HideoutHiddenDuration` | `public override CampaignTime HideoutHiddenDuration` | 属性 |
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime` | 属性 |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime` | 属性 |
| `GetRogueryXpGainAsGhost` | `public override float GetRogueryXpGainAsGhost()` | 方法 |
| `GetRogueryXpGainOnHideoutMissionEnd` | `public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)` | 方法 |
| `GetSendTroopsSuccessChance` | `public override float GetSendTroopsSuccessChance(Hideout hideout)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 HideoutModel](../HideoutModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
