---
title: "EncyclopediaTroopTreeNodeVM"
description: "EncyclopediaTroopTreeNodeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTroopTreeNodeVM.cs."
---
# EncyclopediaTroopTreeNodeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaTroopTreeNodeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTroopTreeNodeVM.cs`

## Overview

EncyclopediaTroopTreeNodeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTroopTreeNodeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaTroopTreeNodeVM → ViewModel. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaTroopTreeNodeVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items) the module directory; inheritance chain EncyclopediaTroopTreeNodeVM → ViewModel. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTroopTreeNodeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaTroopTreeNodeVM` | `public EncyclopediaTroopTreeNodeVM(CharacterObject rootCharacter, CharacterObject activeCharacter, bool isAlternativeUpgrade, PerkObject alternativeUpgradePerk = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsActiveUnit` | `public bool IsActiveUnit` | property |
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaTroopTreeNodeVM>Branch` | property |
| `Unit` | `public EncyclopediaUnitVM Unit` | property |
| `AlternativeUpgradeTooltip` | `public BasicTooltipViewModel AlternativeUpgradeTooltip` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM)
