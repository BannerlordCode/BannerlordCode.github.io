---
title: "DefaultEncyclopediaSettlementPage"
description: "TaleWorlds.CampaignSystem.Encyclopedia.Pages.DefaultEncyclopediaSettlementPage —— 命名空间 TaleWorlds.CampaignSystem.Encyclopedia.Pages 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# DefaultEncyclopediaSettlementPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultEncyclopediaSettlementPage : EncyclopediaPage`  
**Base:** `EncyclopediaPage`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs`

## 概述

`DefaultEncyclopediaSettlementPage` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.Encyclopedia.Pages` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs`（第 14 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `EncyclopediaPage`；解析到的成员共 44 项，其中 17 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `protected override bool CompareVisibility(Settlement s1, Settlement s2, out int comparisonResult)` — 方法，3 个参数，返回 bool
- `public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)` — 方法，2 个参数，返回 int
- `public override string GetComparedValueText(EncyclopediaListItem item)` — 方法，1 个参数，返回 string
- `public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)` — 方法，2 个参数，返回 int
- `public override string GetComparedValueText(EncyclopediaListItem item)` — 方法，1 个参数，返回 string
- `public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)` — 方法，2 个参数，返回 int
- `public override string GetComparedValueText(EncyclopediaListItem item)` — 方法，1 个参数，返回 string
- `public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)` — 方法，2 个参数，返回 int
- `public override string GetComparedValueText(EncyclopediaListItem item)` — 方法，1 个参数，返回 string
- `public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)` — 方法，2 个参数，返回 int
- `public override string GetComparedValueText(EncyclopediaListItem item)` — 方法，1 个参数，返回 string
- `public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)` — 方法，2 个参数，返回 int
- `public override string GetComparedValueText(EncyclopediaListItem item)` — 方法，1 个参数，返回 string
- `protected virtual bool CompareVisibility(Settlement s1, Settlement s2, out int comparisonResult)` — 方法，3 个参数，返回 bool
- `protected int CompareSettlements(EncyclopediaListItem x, EncyclopediaListItem y, DefaultEncyclopediaSettlementPage.EncyclopediaListSettlementComparer.SettlementVisibilityComparerDelegate visibilityComparison, Func<Settlement, Settlement, int> comparison)` — 方法，4 个参数，返回 int
- `protected int CompareFiefs(EncyclopediaListItem x, EncyclopediaListItem y, DefaultEncyclopediaSettlementPage.EncyclopediaListSettlementComparer.SettlementVisibilityComparerDelegate visibilityComparison, Func<Town, Town, int> comparison)` — 方法，4 个参数，返回 int
- `protected delegate bool SettlementVisibilityComparerDelegate(Settlement s1, Settlement s2, out int comparisonResult);` — 方法，3 个参数，返回 bool


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 17 条成员记录全部来自 `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class DefaultEncyclopediaSettlementPage : EncyclopediaPage` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
