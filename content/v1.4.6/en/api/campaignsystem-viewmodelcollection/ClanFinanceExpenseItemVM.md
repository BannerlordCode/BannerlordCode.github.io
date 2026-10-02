---
title: "ClanFinanceExpenseItemVM"
description: "ClanFinanceExpenseItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 16 exposed members (1 methods, 14 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs."
---
# ClanFinanceExpenseItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceExpenseItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs`

## Overview

ClanFinanceExpenseItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanFinanceExpenseItemVM → ViewModel. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceExpenseItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanFinanceExpenseItemVM → ViewModel. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinanceExpenseItemVM` | `public ClanFinanceExpenseItemVM(MobileParty mobileParty)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `WageLimitHint` | `public HintViewModel WageLimitHint` | property |
| `CurrentWageTooltip` | `public BasicTooltipViewModel CurrentWageTooltip` | property |
| `CurrentWageText` | `public string CurrentWageText` | property |
| `CurrentWageLimitText` | `public string CurrentWageLimitText` | property |
| `CurrentWageValueText` | `public string CurrentWageValueText` | property |
| `CurrentWageLimitValueText` | `public string CurrentWageLimitValueText` | property |
| `UnlimitedWageText` | `public string UnlimitedWageText` | property |
| `TitleText` | `public string TitleText` | property |
| `CurrentWage` | `public int CurrentWage` | property |
| `CurrentWageLimit` | `public int CurrentWageLimit` | property |
| `MinWage` | `public int MinWage` | property |
| `MaxWage` | `public int MaxWage` | property |
| `IsUnlimitedWage` | `public bool IsUnlimitedWage` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
