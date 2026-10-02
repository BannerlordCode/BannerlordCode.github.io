---
title: "HeirSelectionPopupHeroVM"
description: "HeirSelectionPopupHeroVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup, inheriting ViewModel; 16 exposed members (2 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeirSelectionPopupHeroVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeirSelectionPopupHeroVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

HeirSelectionPopupHeroVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is HeirSelectionPopupHeroVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 16 public/protected members: 2 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeirSelectionPopupHeroVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`, inheritance chain HeirSelectionPopupHeroVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/16, methods 2/16), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | property |
| `HeirSelectionPopupHeroVM` | `public HeirSelectionPopupHeroVM(Hero hero)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Name` | `public string Name` | property |
| `Age` | `public int Age` | property |
| `Culture` | `public string Culture` | property |
| `Occupation` | `public string Occupation` | property |
| `RelationToMainHero` | `public string RelationToMainHero` | property |
| `Model` | `public HeroViewModel Model` | property |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | property |
| `MBBindingList` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM>Attributes` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>OtherSkills` | property |
| `HasOtherSkills` | `public bool HasOtherSkills` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace HeirSelectionPopupVM](../HeirSelectionPopupVM/)
