---
title: "PerkSelectionVM"
description: "PerkSelectionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (6 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs."
---
# PerkSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkSelectionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs`

## Overview

PerkSelectionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PerkSelectionVM → ViewModel. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkSelectionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection) the module directory; inheritance chain PerkSelectionVM → ViewModel. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PerkSelectionVM` | `public PerkSelectionVM(HeroDeveloper developer, Action<SkillObject>refreshPerksOf, Action onPerkSelection)` | constructor |
| `SetCurrentSelectionPerk` | `public void SetCurrentSelectionPerk(PerkVM perk)` | method |
| `ResetSelectedPerks` | `public void ResetSelectedPerks()` | method |
| `ApplySelectedPerks` | `public void ApplySelectedPerks()` | method |
| `IsPerkSelected` | `public bool IsPerkSelected(PerkObject perk)` | method |
| `IsAnyPerkSelected` | `public bool IsAnyPerkSelected()` | method |
| `ExecuteDeactivate` | `public void ExecuteDeactivate()` | method |
| `IsActive` | `public bool IsActive` | property |
| `MBBindingList` | `public MBBindingList<PerkSelectionItemVM>AvailablePerks` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PerkSelectedByPlayerEvent](../PerkSelectedByPlayerEvent)
- [same namespace PerkSelectionItemVM](../PerkSelectionItemVM)
- [same namespace PerkSelectionToggleEvent](../PerkSelectionToggleEvent)
