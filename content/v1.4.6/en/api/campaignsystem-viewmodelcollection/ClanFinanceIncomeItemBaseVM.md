---
title: "ClanFinanceIncomeItemBaseVM"
description: "ClanFinanceIncomeItemBaseVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 15 exposed members (4 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs."
---
# ClanFinanceIncomeItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceIncomeItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs`

## Overview

ClanFinanceIncomeItemBaseVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanFinanceIncomeItemBaseVM → ViewModel. It exposes 15 public/protected members: 4 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceIncomeItemBaseVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanFinanceIncomeItemBaseVM → ViewModel. The surface is property-led (properties 10/15, methods 4/15), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IncomeTypeAsEnum` | `public IncomeTypes IncomeTypeAsEnum` | property |
| `ClanFinanceIncomeItemBaseVM` | `protected ClanFinanceIncomeItemBaseVM(Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh)` | constructor |
| `PopulateStatsList` | `protected virtual void PopulateStatsList()` | method |
| `PopulateActionList` | `protected virtual void PopulateActionList()` | method |
| `OnIncomeSelection` | `public void OnIncomeSelection()` | method |
| `DetermineIncomeText` | `protected string DetermineIncomeText(int incomeAmount)` | method |
| `MBBindingList` | `public MBBindingList<SelectableItemPropertyVM>ItemProperties` | property |
| `Name` | `public string Name` | property |
| `Location` | `public string Location` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IncomeValueText` | `public string IncomeValueText` | property |
| `ImageName` | `public string ImageName` | property |
| `Income` | `public int Income` | property |
| `Visual` | `public ImageIdentifierVM Visual` | property |
| `IncomeType` | `public int IncomeType` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
