---
title: "EncyclopediaUnitPageVM"
description: "EncyclopediaUnitPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages, inheriting EncyclopediaContentPageVM; 16 exposed members (4 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaUnitPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaUnitPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaUnitPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaUnitPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 16 public/protected members: 4 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaUnitPageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`, inheritance chain EncyclopediaUnitPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/16, methods 4/16), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaUnitPageVM` | `public EncyclopediaUnitPageVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `GetName` | `public override string GetName()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | method |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>Skills` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>PropertiesList` | property |
| `SelectorVM` | `public SelectorVM<EncyclopediaUnitEquipmentSetSelectorItemVM>EquipmentSetSelector` | property |
| `CurrentSelectedEquipmentSet` | `public EncyclopediaUnitEquipmentSetSelectorItemVM CurrentSelectedEquipmentSet` | property |
| `UnitCharacter` | `public CharacterViewModel UnitCharacter` | property |
| `NameText` | `public string NameText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `Tree` | `public EncyclopediaTroopTreeNodeVM Tree` | property |
| `TreeDisplayErrorText` | `public string TreeDisplayErrorText` | property |
| `EquipmentSetText` | `public string EquipmentSetText` | property |
| `HasErrors` | `public bool HasErrors` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM/)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
