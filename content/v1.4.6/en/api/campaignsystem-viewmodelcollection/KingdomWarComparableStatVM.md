---
title: "KingdomWarComparableStatVM"
description: "KingdomWarComparableStatVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 11 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs."
---
# KingdomWarComparableStatVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarComparableStatVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs`

## Overview

KingdomWarComparableStatVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomWarComparableStatVM → ViewModel. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomWarComparableStatVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy) the module directory; inheritance chain KingdomWarComparableStatVM → ViewModel. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomWarComparableStatVM` | `public KingdomWarComparableStatVM(int faction1Stat, int faction2Stat, TextObject name, string faction1Color, string faction2Color, int defaultRange, BasicTooltipViewModel faction1Hint = null, BasicTooltipViewModel faction2Hint = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Faction1Hint` | `public BasicTooltipViewModel Faction1Hint` | property |
| `Faction2Hint` | `public BasicTooltipViewModel Faction2Hint` | property |
| `Name` | `public string Name` | property |
| `Faction1Color` | `public string Faction1Color` | property |
| `Faction2Color` | `public string Faction2Color` | property |
| `Faction1Percentage` | `public int Faction1Percentage` | property |
| `Faction1Value` | `public int Faction1Value` | property |
| `Faction2Percentage` | `public int Faction2Percentage` | property |
| `Faction2Value` | `public int Faction2Value` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM)
