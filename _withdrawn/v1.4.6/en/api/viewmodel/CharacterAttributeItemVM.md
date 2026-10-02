---
title: "CharacterAttributeItemVM"
description: "CharacterAttributeItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper, inheriting ViewModel; 19 exposed members (6 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterAttributeItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterAttributeItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 6 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterAttributeItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`, inheritance chain CharacterAttributeItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/19, methods 6/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AttributeType` | `public CharacterAttribute AttributeType` | property |
| `CharacterAttributeItemVM` | `public CharacterAttributeItemVM(Hero hero, CharacterAttribute currAtt, CharacterDeveloperHeroItemVM developerVM, Action<CharacterAttributeItemVM>onInpectAttribute, Action<CharacterAttributeItemVM>onAddAttributePoint)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteInspectAttribute` | `public void ExecuteInspectAttribute()` | method |
| `ExecuteAddAttributePoint` | `public void ExecuteAddAttributePoint()` | method |
| `Reset` | `public void Reset()` | method |
| `RefreshWithCurrentValues` | `public void RefreshWithCurrentValues()` | method |
| `Commit` | `public void Commit()` | method |
| `MBBindingList` | `public MBBindingList<AttributeBoundSkillItemVM>BoundSkills` | property |
| `AttributeValue` | `public int AttributeValue` | property |
| `UnspentAttributePoints` | `public int UnspentAttributePoints` | property |
| `UnspentAttributePointsText` | `public string UnspentAttributePointsText` | property |
| `Name` | `public string Name` | property |
| `NameExtended` | `public string NameExtended` | property |
| `Description` | `public string Description` | property |
| `IncreaseHelpText` | `public string IncreaseHelpText` | property |
| `IsInspecting` | `public bool IsInspecting` | property |
| `IsAttributeAtMax` | `public bool IsAttributeAtMax` | property |
| `CanAddPoint` | `public bool CanAddPoint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM/)
- [same namespace CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM/)
- [same namespace CharacterDeveloperVM](../CharacterDeveloperVM/)
- [same namespace FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent/)
