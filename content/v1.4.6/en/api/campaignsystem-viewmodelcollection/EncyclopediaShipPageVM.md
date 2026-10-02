---
title: "EncyclopediaShipPageVM"
description: "EncyclopediaShipPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaContentPageVM; 15 exposed members (5 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaShipPageVM.cs."
---
# EncyclopediaShipPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaShipPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaShipPageVM.cs`

## Overview

EncyclopediaShipPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaShipPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaShipPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. It exposes 15 public/protected members: 5 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaShipPageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages) the module directory; inheritance chain EncyclopediaShipPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. The surface is property-led (properties 9/15, methods 5/15), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaShipPageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaShipPageVM` | `public EncyclopediaShipPageVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `GetName` | `public override string GetName()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | method |
| `NameText` | `public string NameText` | property |
| `AvailableUpgradesText` | `public string AvailableUpgradesText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `PrefabId` | `public string PrefabId` | property |
| `StatsText` | `public string StatsText` | property |
| `SailType` | `public string SailType` | property |
| `SailTypeStat` | `public EncyclopediaShipStatVM SailTypeStat` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaShipStatVM>StatList` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaShipSlotVM>AllShipSlots` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM)
