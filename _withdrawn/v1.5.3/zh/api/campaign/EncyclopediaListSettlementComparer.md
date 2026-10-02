---
title: "EncyclopediaListSettlementComparer"
description: "EncyclopediaListSettlementComparer 的自动生成类参考。"
---
# EncyclopediaListSettlementComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListSettlementComparer : EncyclopediaListItemComparerBase `
**Base:** EncyclopediaListItemComparerBase
**Source:** TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs

## 概述

`EncyclopediaListSettlementComparer` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CompareVisibility
`protected virtual bool CompareVisibility(Settlement s1,Settlement s2,out int comparisonResult) `

### CompareSettlements
`protected int CompareSettlements(EncyclopediaListItem x,EncyclopediaListItem y,DefaultEncyclopediaSettlementPage.EncyclopediaListSettlementComparer.SettlementVisibilityComparerDelegate visibilityComparison,Func<Settlement,Settlement,int> comparison) `

### CompareFiefs
`protected int CompareFiefs(EncyclopediaListItem x,EncyclopediaListItem y,DefaultEncyclopediaSettlementPage.EncyclopediaListSettlementComparer.SettlementVisibilityComparerDelegate visibilityComparison,Func<Town,Town,int> comparison) `

### SettlementVisibilityComparerDelegate
`protected delegate bool SettlementVisibilityComparerDelegate(Settlement s1,Settlement s2,out int comparisonResult)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
