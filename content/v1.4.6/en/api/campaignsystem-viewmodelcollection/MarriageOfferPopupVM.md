---
title: "MarriageOfferPopupVM"
description: "MarriageOfferPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 23 exposed members (8 methods, 14 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs."
---
# MarriageOfferPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MarriageOfferPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs`

## Overview

MarriageOfferPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MarriageOfferPopupVM → ViewModel. It exposes 23 public/protected members: 8 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MarriageOfferPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup) the module directory; inheritance chain MarriageOfferPopupVM → ViewModel. The surface is property-led (properties 14/23, methods 8/23), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MarriageOfferPopupVM` | `public MarriageOfferPopupVM(Hero suitor, Hero maiden, Action onClose)` | constructor |
| `Update` | `public void Update()` | method |
| `ExecuteAcceptOffer` | `public void ExecuteAcceptOffer()` | method |
| `ExecuteDeclineOffer` | `public void ExecuteDeclineOffer()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `TitleText` | `public string TitleText` | property |
| `ClanText` | `public string ClanText` | property |
| `AgeText` | `public string AgeText` | property |
| `OccupationText` | `public string OccupationText` | property |
| `RelationText` | `public string RelationText` | property |
| `ConsequencesText` | `public string ConsequencesText` | property |
| `MBBindingList` | `public MBBindingList<BindingListStringItem>ConsequencesList` | property |
| `ButtonOkLabel` | `public string ButtonOkLabel` | property |
| `ButtonCancelLabel` | `public string ButtonCancelLabel` | property |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen` | property |
| `OffereeClanMember` | `public MarriageOfferPopupHeroVM OffereeClanMember` | property |
| `OffererClanMember` | `public MarriageOfferPopupHeroVM OffererClanMember` | property |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MarriageOfferPopupHeroAttributeVM](../MarriageOfferPopupHeroAttributeVM)
- [same namespace MarriageOfferPopupHeroVM](../MarriageOfferPopupHeroVM)
