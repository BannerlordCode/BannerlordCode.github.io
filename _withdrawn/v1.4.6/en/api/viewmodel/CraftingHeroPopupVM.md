---
title: "CraftingHeroPopupVM"
description: "CraftingHeroPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting, inheriting ViewModel; 9 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingHeroPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingHeroPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingHeroPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingHeroPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingHeroPopupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`, inheritance chain CraftingHeroPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingHeroPopupVM` | `public CraftingHeroPopupVM(Func<MBBindingList<CraftingAvailableHeroItemVM>>getCraftingHeroes)` | constructor |
| `ExecuteOpenPopup` | `public void ExecuteOpenPopup()` | method |
| `ExecuteClosePopup` | `public void ExecuteClosePopup()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsVisible` | `public bool IsVisible` | property |
| `SelectHeroText` | `public string SelectHeroText` | property |
| `MBBindingList` | `public MBBindingList<CraftingAvailableHeroItemVM>CraftingHeroes` | property |
| `SetExitInputKey` | `public void SetExitInputKey(HotKey hotKey)` | method |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/)
- [same namespace CraftingListPropertyItem](../CraftingListPropertyItem/)
- [same namespace CraftingPerkVM](../CraftingPerkVM/)
- [same namespace CraftingResourceItemVM](../CraftingResourceItemVM/)
