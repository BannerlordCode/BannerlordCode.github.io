---
title: "WeaponDesignSelectorVM"
description: "WeaponDesignSelectorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign, inheriting ViewModel; 9 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeaponDesignSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignSelectorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

WeaponDesignSelectorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponDesignSelectorVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDesignSelectorVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`, inheritance chain WeaponDesignSelectorVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Design` | `public WeaponDesign Design` | property |
| `WeaponDesignSelectorVM` | `public WeaponDesignSelectorVM(WeaponDesign design, Action<WeaponDesignSelectorVM>onSelection)` | constructor |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `Name` | `public string Name` | property |
| `WeaponTypeCode` | `public string WeaponTypeCode` | property |
| `Visual` | `public ItemImageIdentifierVM Visual` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM/)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM/)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
