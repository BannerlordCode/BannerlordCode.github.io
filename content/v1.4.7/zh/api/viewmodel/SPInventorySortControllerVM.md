---
title: "SPInventorySortControllerVM"
description: "TaleWorlds.CampaignSystem.ViewModelCollection.Inventory.SPInventorySortControllerVM —— 命名空间 TaleWorlds.CampaignSystem.ViewModelCollection.Inventory 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SPInventorySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class SPInventorySortControllerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`

## 概述

`SPInventorySortControllerVM` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem.ViewModelCollection` 的 `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `ViewModel`；解析到的成员共 69 项，其中 8 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public void SetSortMode(bool isAscending)` — 方法，1 个参数，返回 void
- `public abstract int Compare(SPItemVM x, SPItemVM y);` — 方法，2 个参数，返回 int
- `protected int ResolveEquality(SPItemVM x, SPItemVM y)` — 方法，2 个参数，返回 int
- `protected bool _isAscending;` — 字段，类型 bool
- `public override int Compare(SPItemVM x, SPItemVM y)` — 方法，2 个参数，返回 int
- `public override int Compare(SPItemVM x, SPItemVM y)` — 方法，2 个参数，返回 int
- `public override int Compare(SPItemVM x, SPItemVM y)` — 方法，2 个参数，返回 int
- `public override int Compare(SPItemVM x, SPItemVM y)` — 方法，2 个参数，返回 int


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 8 条成员记录全部来自 `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class SPInventorySortControllerVM : ViewModel` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`viewmodel` API](../)
- [ViewModel（基类）](../../core-extra/ViewModel)
- [AcceptCallToWarOfferNotificationItemVM（同命名空间）](../AcceptCallToWarOfferNotificationItemVM)
- [AcceptingCallToWarAgreementDecisionItemVM（同命名空间）](../AcceptingCallToWarAgreementDecisionItemVM)
- [ActionCampaignOptionData（同命名空间）](../ActionCampaignOptionData)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
