---
title: "HeirSelectionPopupVM"
description: "HeirSelectionPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 17 exposed members (5 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs."
---
# HeirSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeirSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs`

## Overview

HeirSelectionPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is HeirSelectionPopupVM → ViewModel. It exposes 17 public/protected members: 5 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeirSelectionPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup) the module directory; inheritance chain HeirSelectionPopupVM → ViewModel. The surface is property-led (properties 11/17, methods 5/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeirSelectionPopupVM` | `public HeirSelectionPopupVM(Dictionary<Hero, int>heirApparents)` | constructor |
| `Update` | `public void Update()` | method |
| `ExecuteSelectHeir` | `public void ExecuteSelectHeir()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `TitleText` | `public string TitleText` | property |
| `ButtonOkLabel` | `public string ButtonOkLabel` | property |
| `NameLabel` | `public string NameLabel` | property |
| `AgeLabel` | `public string AgeLabel` | property |
| `CultureLabel` | `public string CultureLabel` | property |
| `OccupationLabel` | `public string OccupationLabel` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `MBBindingList` | `public MBBindingList<HeirSelectionPopupHeroVM>HeirApparents` | property |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero` | property |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace HeirSelectionPopupHeroVM](../HeirSelectionPopupHeroVM)
