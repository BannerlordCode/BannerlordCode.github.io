---
title: "TeleportationHelper"
description: "传送系统的薄包装：向 ITeleportationCampaignBehavior 问一个数——正在传送的英雄还有几小时到目的地。"
---

# TeleportationHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TeleportationHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/TeleportationHelper.cs`

## 概述

本类展示了一个常见模式——静态 helper 不是规则的家，规则的家是 `CampaignBehavior`。它只有一个方法：取「正在传送的英雄还有几小时到目的地」。行为不存在时返回 `0f`，调用方无法区分「已到达」与「系统不可用」。

## 心智模型

把 TeleportationHelper 想成传送系统的「前台查询」：真正持有传送逻辑的是 `ITeleportationCampaignBehavior`，本类只是「向一个 `CampaignBehavior` 问一个数」的薄包装。想知道传送什么时候到，要么调本类（方便、但把「不可用」和「已到达」混成 `0f`），要么自己 `GetCampaignBehavior<ITeleportationCampaignBehavior>()` 拿到行为直接问（能区分两种状态）。本类不计算任何时间。

## 怎么用

### 怎么拿到它

静态类，直接 `TeleportationHelper.GetHoursLeftForTeleportingHeroToReachItsDestination(hero)` 调用。

### 典型用法

- 要问「正在传送的英雄还有几小时到目的地」时，用 `GetHoursLeftForTeleportingHeroToReachItsDestination(hero)`。
- 行为不存在时返回 `0f`——调用方无法区分「已到达」与「系统不可用」。

### 最容易踩的坑

- **行为不存在时返回 `0f`**——字面意思是「已经到达」，但真实含义可能是「传送系统没启用/没有这个行为」⇒ **调用方无法区分「已到达」与「系统不可用」**。
- 没有 null 检查（`Campaign.Current` 为 null 会 NRE）。
- 它只是「向一个 `CampaignBehavior` 问一个数」的薄包装——**真源在 `ITeleportationCampaignBehavior`**，本类不计算任何时间。

## 关键成员

- `public static float GetHoursLeftForTeleportingHeroToReachItsDestination(Hero teleportingHero)` —— 取「正在传送的英雄还有几小时到目的地」：`Campaign.Current.GetCampaignBehavior<ITeleportationCampaignBehavior>()` 非 null 时返回 `RemainingHoursFromNow`，否则返回 `0f`。`TeleportationHelper.cs:11`

## 真实示例

```csharp
// 问正在传送的英雄还有几小时到目的地
float hours = TeleportationHelper.GetHoursLeftForTeleportingHeroToReachItsDestination(Hero.MainHero);
// 行为不存在时返回 0f，无法区分「已到达」与「系统不可用」
ITeleportationCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<ITeleportationCampaignBehavior>();
Debug.Print($"hours left = {hours} behavior={behavior != null}");
```

## 参见

- ↔ [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) —— 本类只是「向战役行为问一个数」，行为才是真源
- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.GetCampaignBehavior<T>()` 是取行为的入口

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
