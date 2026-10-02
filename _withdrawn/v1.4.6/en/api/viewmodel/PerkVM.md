---
title: "PerkVM"
description: "PerkVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper, inheriting ViewModel; 17 exposed members (3 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PerkVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PerkVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PerkVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 3 methods, 11 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`, inheritance chain PerkVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/17, methods 3/17), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentState` | `public PerkVM.PerkStates CurrentState` | property |
| `PerkVM` | `public PerkVM(PerkObject perk, bool isAvailable, PerkVM.PerkAlternativeType alternativeType, Action<PerkVM>onStartSelection, Action<PerkVM>onSelectionOver, Func<PerkObject, bool>getIsPerkSelected, Func<PerkObject, bool>getIsPreviousPerkSelected)` | constructor |
| `RefreshState` | `public void RefreshState()` | method |
| `ExecuteShowPerkConcept` | `public void ExecuteShowPerkConcept()` | method |
| `ExecuteStartSelection` | `public void ExecuteStartSelection()` | method |
| `IsTutorialHighlightEnabled` | `public bool IsTutorialHighlightEnabled` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `Level` | `public int Level` | property |
| `PerkState` | `public int PerkState` | property |
| `AlternativeType` | `public int AlternativeType` | property |
| `LevelText` | `public string LevelText` | property |
| `BackgroundImage` | `public string BackgroundImage` | property |
| `PerkId` | `public string PerkId` | property |
| `PerkStates` | `public enum PerkStates` | property |
| `PerkAlternativeType` | `public enum PerkAlternativeType` | property |
| `PerkStates` | `public enum PerkStates` | nested type |
| `PerkAlternativeType` | `public enum PerkAlternativeType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM/)
- [same namespace CharacterAttributeItemVM](../CharacterAttributeItemVM/)
- [same namespace CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM/)
- [same namespace CharacterDeveloperVM](../CharacterDeveloperVM/)
