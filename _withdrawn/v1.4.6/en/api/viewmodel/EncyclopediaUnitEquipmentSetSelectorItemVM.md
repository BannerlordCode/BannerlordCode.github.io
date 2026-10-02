---
title: "EncyclopediaUnitEquipmentSetSelectorItemVM"
description: "EncyclopediaUnitEquipmentSetSelectorItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items, inheriting SelectorItemVM; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaUnitEquipmentSetSelectorItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaUnitEquipmentSetSelectorItemVM : SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaUnitEquipmentSetSelectorItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is EncyclopediaUnitEquipmentSetSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaUnitEquipmentSetSelectorItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`, inheritance chain EncyclopediaUnitEquipmentSetSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EquipmentSet` | `public Equipment EquipmentSet` | property |
| `EncyclopediaUnitEquipmentSetSelectorItemVM` | `public EncyclopediaUnitEquipmentSetSelectorItemVM(Equipment equipmentSet, string name = "") : base(name)` | constructor |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>LeftEquipmentList` | property |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>RightEquipmentList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorItemVM](../SelectorItemVM/)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM/)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM/)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM/)
