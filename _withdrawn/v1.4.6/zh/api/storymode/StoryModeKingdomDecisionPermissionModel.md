---
title: "StoryModeKingdomDecisionPermissionModel"
description: "StoryModeKingdomDecisionPermissionModel：StoryMode.GameComponents 的 public 类，继承 KingdomDecisionPermissionModel；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 storymode。源文件 StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeKingdomDecisionPermissionModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**File:** `StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModeKingdomDecisionPermissionModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs。它是一个 public 类，实现/继承 KingdomDecisionPermissionModel，继承链为 StoryModeKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel → GameModel。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeKingdomDecisionPermissionModel 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode.GameComponents`，继承链 StoryModeKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel → GameModel。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPolicyDecisionAllowed` | `public override bool IsPolicyDecisionAllowed(PolicyObject policy)` | 方法 |
| `IsAnnexationDecisionAllowed` | `public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)` | 方法 |
| `IsExpulsionDecisionAllowed` | `public override bool IsExpulsionDecisionAllowed(Clan expelledClan)` | 方法 |
| `IsKingSelectionDecisionAllowed` | `public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)` | 方法 |
| `IsWarDecisionAllowedBetweenKingdoms` | `public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | 方法 |
| `IsPeaceDecisionAllowedBetweenKingdoms` | `public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | 方法 |
| `IsStartAllianceDecisionAllowedBetweenKingdoms` | `public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomDecisionPermissionModel](../../campaign-ext/KingdomDecisionPermissionModel/)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
