---
title: "FeatHelper"
description: "文化特性加成的实际施加者：按增量类型把 FeatObject 的数值加进 ExplainedNumber，部队版走 4 级文化回退。"
---

# FeatHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class FeatHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/FeatHelper.cs`

## 概述

本类负责「如果这支部队/这个文化有该特性，就按它的增量类型把数值加进 `ExplainedNumber`」。它不决定「谁有什么特性」——`HasFeat` 的真相在 `CultureObject` 与 `PartyBaseHelper`，数值真相在 `FeatObject`。两个重载分别处理「直接给文化对象」和「给部队、由部队反查文化」两种入口。

## 心智模型

把 FeatHelper 想成文化特性的「记账员」：`FeatObject` 声明「这个特性给多少、是加还是乘」，本类负责把这笔账记进调用方的 `ExplainedNumber`。两个重载的前置判断来源不同——文化版用 `culture.HasFeat(feat)`，部队版用 `PartyBaseHelper.HasFeat(party, feat)`——这意味着同一支部队用不同入口可能得到不同结果。部队版的 4 级文化回退（领队 → 部队文化 → 主人文化 → 聚落文化）是本类最复杂的部分，也是 NRE 风险最高的地方。

## 怎么用

### 怎么拿到它

静态类，直接 `FeatHelper.ApplyCultureFeat(...)` 调用。两个重载分别接受 `CultureObject` 和 `PartyBase` 作为第一个参数。

### 典型用法

- 要给某个文化的特性加成时，用 `ApplyCultureFeat(culture, feat, ref result)`。
- 要给部队的文化特性加成时，用 `ApplyCultureFeat(party, feat, ref result)`，它会自动走 4 级回退找到「算谁的文化」。
- 需要把多个特性累加进同一个 `ExplainedNumber` 时，多次调用本方法，每次传同一个 `ref result`。

### 最容易踩的坑

- **4 级全部落空时 `cultureObject` 仍是 `null`**，会一路传进 `ApplyCultureFeat(null, feat, ref result)`，在第 16 行 `culture.HasFeat(feat)` 处 **NRE**——第 16 行没有 null 检查。
- 两个重载的**前置判断不同源**（一个 `culture.HasFeat`、一个 `PartyBaseHelper.HasFeat`）⇒ 同一支部队用不同入口可能得到不同结果。
- 只有 `Add` 与 `AddFactor` 两种 `AdditionType` 被处理，其余只断言（`Debug.FailedAssert`），**不加任何值**——如果 `FeatObject` 的 `IncrementType` 是别的值，本类静默跳过。

## 关键成员

- `public static void ApplyCultureFeat(CultureObject culture, FeatObject feat, ref ExplainedNumber result)` —— 文化特性加成的实际施加者。`!culture.HasFeat(feat)` 直接返回；`Add` → `result.Add(...)`；`AddFactor` → `result.AddFactor(...)`；其他类型落到 `Debug.FailedAssert` 不加值。`FeatHelper.cs:14`
- `public static void ApplyCultureFeat(PartyBase party, FeatObject feat, ref ExplainedNumber result)` —— 部队版本。前置判断用 `PartyBaseHelper.HasFeat(party, feat)`，然后按 4 级回退（领队 → 部队文化 → 主人文化 → 聚落文化）确定「算谁的文化」，最后转交上面那条。`FeatHelper.cs:34`

## 真实示例

```csharp
// 给一个可解释数值加上「部队文化特性」的加成
ExplainedNumber result = new ExplainedNumber(1f, true, null);
FeatObject feat = /* 换成你确证存在的 FeatObject 来源 */;
FeatHelper.ApplyCultureFeat(MobileParty.MainParty.Party, feat, ref result);
Debug.Print($"with culture feat = {result.ResultNumber}");
```

## 参见

- ↔ [SkillHelper](../SkillHelper) —— 同一套 `ExplainedNumber` + `Add`/`AddFactor` 累加写法，两页对着读
- ↔ [GameModels](../../campaign/GameModels) —— `FeatObject` 的文化加成规则在模型层
- ↔ [Campaign](../../campaign/Campaign) —— `PartyBase` / `CultureObject` 都挂在战役上

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
