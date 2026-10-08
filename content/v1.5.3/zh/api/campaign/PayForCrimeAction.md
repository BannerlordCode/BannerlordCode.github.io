---
title: "PayForCrimeAction"
description: "静态 Action 类，让你按支付方式（金币/影响力/惩罚/处决）为主角清除犯罪记录：先问价再付钱，选错方式可能直接死。"
---

# PayForCrimeAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class PayForCrimeAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/PayForCrimeAction.cs`

## 概述

这个静态 Action 类负责为主角"消罪"：按 `CrimeModel.PaymentMethod` 指定的方式付出代价，并把犯罪度降到惩罚线以下。`ApplyInternal` 用 `HasAnyFlag` 按位检查支付方式，四种方式可以组合——Gold 扣金币并触发贿赂技能经验、Influence 扣玩家氏族影响力、Punishment 按概率决定杀死或折磨主角、Execution 直接杀死主角；若主角没死，则把犯罪度降到 `GetCrimeRatingAfterPunishment()` 以下。`GetClearCrimeCost` 是只读查询入口，返回清除犯罪记录的花费，供 mod 在付款前问价。

## 心智模型

入口 → `ApplyInternal` 的收敛结构：

- 公开入口有两个：只读查询 `GetClearCrimeCost`(55) 和执行 `Apply`(61)，后者转发给私有 `ApplyInternal`(13)。
- `GetClearCrimeCost` 返回 `CrimeModel.GetCost(faction, paymentMethod, CrimeModel.GetMinAcceptableCrimeRating(faction))`——即把犯罪度降到"最低可接受值"所需的花费。它不改任何状态。
- `ApplyInternal` 用 `HasAnyFlag` 按位检查 `paymentMethod`，四种方式可以组合：
  1. Gold：`GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, cost, false)` 扣金币，并 `SkillLevelingManager.OnBribeGiven(cost)`。
  2. Influence：`ChangeClanInfluenceAction.Apply(Clan.PlayerClan, -cost)` 扣影响力。
  3. Punishment：按 `MathF.Clamp(1f - Hero.MainHero.HitPoints * 0.01f, 0.001f, 1f) * 0.25f` 与 `MBRandom.RandomFloat` 比较，杀死主角（`KillCharacterAction.ApplyByMurder`）或让主角受伤（`MakeWounded`），受伤时还有 50% 概率触发 `SkillLevelingManager.OnMainHeroTortured`。
  4. Execution：直接杀死主角。
- 若主角没死（`!flag`），把犯罪度降到 `min(当前值, GetCrimeRatingAfterPunishment())`，通过 `ChangeCrimeRatingAction.Apply(faction, num2 - faction.MainHeroCrimeRating, true)` 完成。

"先问价再付钱"的模式：`GetClearCrimeCost` 让 mod 在调用 `Apply` 前知道花费，避免付不起时状态被改一半。

## 怎么用

### 怎么拿到它

静态类，直接 `PayForCrimeAction.Apply(…)` 调用；问价用 `PayForCrimeAction.GetClearCrimeCost(…)`。

### 典型用法

1. 付款前问价：`float cost = PayForCrimeAction.GetClearCrimeCost(faction, CrimeModel.PaymentMethod.Gold);`
2. 金币消罪：`PayForCrimeAction.Apply(faction, CrimeModel.PaymentMethod.Gold);`
3. 组合支付：`PayForCrimeAction.Apply(faction, CrimeModel.PaymentMethod.Gold | CrimeModel.PaymentMethod.Influence);`
4. 在 UI 里显示"清除犯罪记录需 X 金币"按钮，点击后才 `Apply`。

### 最容易踩的坑

1. `GetClearCrimeCost` 是只读的，不会改状态；真正改状态的是 `Apply`。
2. `PaymentMethod` 是位标志枚举，可以组合；组合时每种方式都会执行。
3. Punishment 方式可能直接杀死主角（`ApplyByMurder`），也可能只让主角受伤；Execution 必定杀死主角。
4. 主角被杀死后（`flag == true`）不会再降低犯罪度——犯罪度保留原值。
5. `Apply` 没有默认参数，`paymentMethod` 必须显式传。

## 关键成员

- **`ApplyInternal`**（`PayForCrimeAction.cs:13`）— 私有实现：按位处理四种支付方式，主角存活时降低犯罪度。mod 不应直接调用。
- **`GetClearCrimeCost`**（`PayForCrimeAction.cs:55`）— 只读查询：返回把犯罪度降到最低可接受值所需花费，不改状态。
- **`Apply`**（`PayForCrimeAction.cs:61`）— 公开执行入口，转发给 `ApplyInternal`，无默认参数。
- **`PayForCrimeAction`**（`PayForCrimeAction.cs:10`）— 静态类声明，所有成员都是静态的，无法实例化。

## 真实示例

```csharp
// 先问价：清除与某阵营的犯罪记录要花多少钱
IFaction faction = Hero.MainHero.MapFaction;
float goldCost = PayForCrimeAction.GetClearCrimeCost(faction, CrimeModel.PaymentMethod.Gold);

// 金币消罪：扣金币并把犯罪度降到惩罚线以下
PayForCrimeAction.Apply(faction, CrimeModel.PaymentMethod.Gold);

// 组合支付：金币 + 影响力一起付
PayForCrimeAction.Apply(faction, CrimeModel.PaymentMethod.Gold | CrimeModel.PaymentMethod.Influence);

// 注意：Punishment / Execution 方式可能直接杀死主角，用之前先想清楚
```

## 参见

- [ChangeCrimeRatingAction](../ChangeCrimeRatingAction) —— 直接调整犯罪度的 Action，本页在主角存活时内部会调用它
- [Campaign](../Campaign) —— 战役层 Action 汇总
- [TownHelpers](../../core-extra/TownHelpers) —— 城镇相关辅助工具

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
