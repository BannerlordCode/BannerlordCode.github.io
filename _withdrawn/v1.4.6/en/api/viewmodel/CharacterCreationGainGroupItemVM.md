---
title: "CharacterCreationGainGroupItemVM"
description: "CharacterCreationGainGroupItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationGainGroupItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationGainGroupItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterCreationGainGroupItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationGainGroupItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationGainGroupItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`, inheritance chain CharacterCreationGainGroupItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AttributeObj` | `public CharacterAttribute AttributeObj` | property |
| `CharacterCreationGainGroupItemVM` | `public CharacterCreationGainGroupItemVM(CharacterAttribute attributeObj)` | constructor |
| `ResetValues` | `public void ResetValues()` | method |
| `MBBindingList` | `public MBBindingList<CharacterCreationGainedSkillItemVM>Skills` | property |
| `Attribute` | `public CharacterCreationGainedAttributeItemVM Attribute` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM/)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM/)
