---
title: "StoryModeBannerItemModel"
description: "StoryModeBannerItemModel：StoryMode 的 public 类，继承 BannerItemModel；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 StoryMode/GameComponents/StoryModeBannerItemModel.cs。"
---
# StoryModeBannerItemModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**File:** `StoryMode/GameComponents/StoryModeBannerItemModel.cs`

## 概述

StoryModeBannerItemModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModeBannerItemModel.cs。它是一个 public 类，实现/继承 BannerItemModel，继承链为 StoryModeBannerItemModel → BannerItemModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeBannerItemModel 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.GameComponents），继承链 StoryModeBannerItemModel → BannerItemModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 BannerItemModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModeBannerItemModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItems()` | 方法 |
| `CanBannerBeUpdated` | `public override bool CanBannerBeUpdated(ItemObject item)` | 方法 |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero)` | 方法 |
| `GetBannerItemLevelForHero` | `public override int GetBannerItemLevelForHero(Hero hero)` | 方法 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
- [同命名空间 StoryModeCombatXpModel](../StoryModeCombatXpModel)
