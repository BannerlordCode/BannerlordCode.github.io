---
title: "TraitEffectHelper"
description: "人格特质加成的静态工具：把英雄的特质等级翻译成数值，再按增量类型写进 ExplainedNumber。"
---

# TraitEffectHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TraitEffectHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/TraitEffectHelper.cs`

## 概述

本类只做两件事——把「英雄的特质等级」翻译成「数值」（`GetTraitEffectBonus`），再按增量类型把数值写进 `ExplainedNumber`（`ApplyTraitEffect`）。`TraitEffectObject` 描述「某特质在某等级下给多少」，本类负责查表并落账。与 `FeatHelper` 是并列的两种加成来源（文化特性 vs 人格特质），写法刻意一致。

## 心智模型

把 TraitEffectHelper 想成人格特质的「查表员 + 记账员」：`TraitEffectObject` 是一张「等级 → 数值」的表，`GetTraitEffectBonus` 负责查表，`ApplyTraitEffect` 负责把查到的数值按 `Add` 或 `AddFactor` 记进 `ExplainedNumber`。与 `FeatHelper` 的写法刻意一致（都是 `Add` / `AddFactor` 二选一 + 越界断言），但说明文本不同：`FeatHelper` 用 `str_culture`，本类用 `{=ENta0wCu}Personality`。特质等级为 0 时在调 `effect.GetBonus` 之前就短路了，所以「0 级也有非零效果」这种设计拿不到。

## 怎么用

### 怎么拿到它

静态类，直接 `TraitEffectHelper.方法名(...)` 调用。

### 典型用法

- 只想取数值、不改 `ExplainedNumber` 时，用 `GetTraitEffectBonus(hero, effect)`。
- 要走完整路径（按 `IncrementType` 决定 `Add` 还是 `AddFactor`）时，用 `ApplyTraitEffect(hero, effect, ref result)`。
- 需要把多个特质累加进同一个 `ExplainedNumber` 时，多次调用 `ApplyTraitEffect`，每次传同一个 `ref result`。

### 最容易踩的坑

- **特质等级为 0 时在调 `effect.GetBonus` 之前就短路了**（第 38–41 行）⇒ 「0 级也有非零效果」这种设计**拿不到**，`GetTraitEffectBonus` 对 0 级恒返回 `0f`。
- 第 43–46 行的 `bonus == 0f` 分支与直接 `return bonus` 行为等价（冗余判断，但**保留**了「0 就不加」的语义）。
- 没有 null 检查——`hero` 或 `effect` 为 `null` 直接 NRE。
- 只有 `Add` 与 `AddFactor` 两种 `EffectIncrementType` 被处理，其余只断言（`Debug.FailedAssert`），**不加任何值**。

## 关键成员

- `public static void ApplyTraitEffect(Hero hero, TraitEffectObject effect, ref ExplainedNumber result)` —— 先 `GetTraitEffectBonus` 取数值，为 `0f` 直接返回；`Add` → `result.Add(...)`；`AddFactor` → `result.AddFactor(...)`；其他类型落到 `Debug.FailedAssert`。说明文本固定用 `{=ENta0wCu}Personality`。`TraitEffectHelper.cs:14`
- `public static float GetTraitEffectBonus(Hero hero, TraitEffectObject effect)` —— 查表：`hero.GetTraitLevel(effect.Trait)` 取等级，等级为 `0` 直接返回 `0f`；否则 `effect.GetBonus(traitLevel)` 取数值，为 `0f` 返回 `0f`，否则返回该数值。`TraitEffectHelper.cs:35`

## 真实示例

```csharp
// 只取数值，不改 ExplainedNumber
float bonus = TraitEffectHelper.GetTraitEffectBonus(Hero.MainHero, traitEffect);
Debug.Print($"trait bonus = {bonus}");   // 特质等级为 0 时恒为 0

// 走完整路径：按 IncrementType 决定 Add 还是 AddFactor
ExplainedNumber result = new ExplainedNumber(1f, true, null);
TraitEffectHelper.ApplyTraitEffect(Hero.MainHero, traitEffect, ref result);
Debug.Print($"with trait effect = {result.ResultNumber}");
```

## 参见

- ↔ [SkillHelper](../SkillHelper) —— 同一套 `ExplainedNumber` + `Add`/`AddFactor` 累加写法
- ↔ [FeatHelper](../FeatHelper) —— 同批的另一半：文化特性（Feat）与本类的人格特质（Trait）是两种加成来源
- ↔ [GameModels](../../campaign/GameModels) —— `TraitEffectObject` 的数值在模型层

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
