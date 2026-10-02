---
title: "CraftingAvailableHeroItemVM"
description: "CraftingAvailableHeroItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 18 exposed members (6 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs."
---
# CraftingAvailableHeroItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingAvailableHeroItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs`

## Overview

CraftingAvailableHeroItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingAvailableHeroItemVM → ViewModel. It exposes 18 public/protected members: 6 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingAvailableHeroItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting) the module directory; inheritance chain CraftingAvailableHeroItemVM → ViewModel. The surface is property-led (properties 11/18, methods 6/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | property |
| `CraftingAvailableHeroItemVM` | `public CraftingAvailableHeroItemVM(Hero hero, Action<CraftingAvailableHeroItemVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshStamina` | `public void RefreshStamina()` | method |
| `RefreshOrderAvailability` | `public void RefreshOrderAvailability(CraftingOrder order)` | method |
| `RefreshSkills` | `public void RefreshSkills()` | method |
| `RefreshPerks` | `public void RefreshPerks()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `IsDisabled` | `public bool IsDisabled` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HeroData` | `public HeroVM HeroData` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `CurrentStamina` | `public float CurrentStamina` | property |
| `MaxStamina` | `public int MaxStamina` | property |
| `StaminaPercentage` | `public string StaminaPercentage` | property |
| `SmithySkillLevel` | `public int SmithySkillLevel` | property |
| `MBBindingList` | `public MBBindingList<CraftingPerkVM>CraftingPerks` | property |
| `PerksText` | `public string PerksText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM)
- [same namespace CraftingListPropertyItem](../CraftingListPropertyItem)
- [same namespace CraftingPerkVM](../CraftingPerkVM)
- [same namespace CraftingResourceItemVM](../CraftingResourceItemVM)
