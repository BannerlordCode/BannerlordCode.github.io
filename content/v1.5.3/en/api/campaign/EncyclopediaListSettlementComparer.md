---
title: "EncyclopediaListSettlementComparer"
description: "Auto-generated class reference for EncyclopediaListSettlementComparer."
---
# EncyclopediaListSettlementComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListSettlementComparer : EncyclopediaListItemComparerBase `
**Base:** EncyclopediaListItemComparerBase
**Source:** TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs

## Overview

Auto-generated stub for `EncyclopediaListSettlementComparer`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CompareVisibility
`protected virtual bool CompareVisibility(Settlement s1,Settlement s2,out int comparisonResult)`

### CompareSettlements
`protected int CompareSettlements(EncyclopediaListItem x,EncyclopediaListItem y,DefaultEncyclopediaSettlementPage.EncyclopediaListSettlementComparer.SettlementVisibilityComparerDelegate visibilityComparison,Func<Settlement,Settlement,int> comparison)`

### CompareFiefs
`protected int CompareFiefs(EncyclopediaListItem x,EncyclopediaListItem y,DefaultEncyclopediaSettlementPage.EncyclopediaListSettlementComparer.SettlementVisibilityComparerDelegate visibilityComparison,Func<Town,Town,int> comparison)`

### SettlementVisibilityComparerDelegate
`protected delegate bool SettlementVisibilityComparerDelegate(Settlement s1,Settlement s2,out int comparisonResult)`

## See Also

- [Section index](../)
