---
title: "CharacterAttributeItemVM"
description: "CharacterAttributeItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 19 exposed members (6 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs."
---
# CharacterAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs`

## Overview

CharacterAttributeItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterAttributeItemVM → ViewModel. It exposes 19 public/protected members: 6 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterAttributeItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper) the module directory; inheritance chain CharacterAttributeItemVM → ViewModel. The surface is property-led (properties 12/19, methods 6/19), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [same namespace CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM)
- [same namespace CharacterDeveloperVM](../CharacterDeveloperVM)
- [same namespace FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent)
