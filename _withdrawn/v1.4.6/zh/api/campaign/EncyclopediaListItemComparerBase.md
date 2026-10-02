---
title: "EncyclopediaListItemComparerBase"
description: "EncyclopediaListItemComparerBase：TaleWorlds.CampaignSystem.Encyclopedia 的 public 类，继承 IComparer<EncyclopediaListItem>；公开成员 9 个（方法 6、属性 1、字段 2）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListItemComparerBase

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncyclopediaListItemComparerBase : IComparer<EncyclopediaListItem>`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

EncyclopediaListItemComparerBase 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs。它是一个 public 类（abstract），实现/继承 IComparer<EncyclopediaListItem>，继承链为 EncyclopediaListItemComparerBase → IComparer。public/protected 成员共 9 个：6 方法、1 属性、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaListItemComparerBase 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Encyclopedia`，继承链 EncyclopediaListItemComparerBase → IComparer。成员构成以方法为主（方法 6/9，属性 1/9），对外主要以操作入口暴露。继承链上的 IComparer 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsAscending` | `public bool IsAscending` | 属性 |
| `SetSortOrder` | `public void SetSortOrder(bool isAscending)` | 方法 |
| `SwitchSortOrder` | `public void SwitchSortOrder()` | 方法 |
| `SetDefaultSortOrder` | `public void SetDefaultSortOrder()` | 方法 |
| `Compare` | `public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y);` | 方法 |
| `GetComparedValueText` | `public abstract string GetComparedValueText(EncyclopediaListItem item);` | 方法 |
| `ResolveEquality` | `protected int ResolveEquality(EncyclopediaListItem x, EncyclopediaListItem y)` | 方法 |
| `_emptyValue` | `protected readonly TextObject _emptyValue` | 字段 |
| `_missingValue` | `protected readonly TextObject _missingValue` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EncyclopediaFilterGroup](../EncyclopediaFilterGroup/)
- [同命名空间 EncyclopediaFilterItem](../EncyclopediaFilterItem/)
- [同命名空间 EncyclopediaListItem](../EncyclopediaListItem/)
- [同命名空间 EncyclopediaManager](../EncyclopediaManager/)
