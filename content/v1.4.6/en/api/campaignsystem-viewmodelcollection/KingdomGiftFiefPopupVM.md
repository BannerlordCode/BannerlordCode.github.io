---
title: "KingdomGiftFiefPopupVM"
description: "KingdomGiftFiefPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 24 exposed members (7 methods, 16 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs."
---
# KingdomGiftFiefPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs`

## Overview

KingdomGiftFiefPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomGiftFiefPopupVM → ViewModel. It exposes 24 public/protected members: 7 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomGiftFiefPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement) the module directory; inheritance chain KingdomGiftFiefPopupVM → ViewModel. The surface is property-led (properties 16/24, methods 7/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomGiftFiefPopupVM` | `public KingdomGiftFiefPopupVM(Action onSettlementGranted)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OpenWith` | `public void OpenWith(Settlement settlement)` | method |
| `ExecuteGiftSettlement` | `public void ExecuteGiftSettlement()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected` | property |
| `MBBindingList` | `public MBBindingList<KingdomClanItemVM>Clans` | property |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan` | property |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController` | property |
| `IsOpen` | `public bool IsOpen` | property |
| `TitleText` | `public string TitleText` | property |
| `GiftText` | `public string GiftText` | property |
| `CancelText` | `public string CancelText` | property |
| `BannerText` | `public string BannerText` | property |
| `TypeText` | `public string TypeText` | property |
| `NameText` | `public string NameText` | property |
| `InfluenceText` | `public string InfluenceText` | property |
| `FiefsText` | `public string FiefsText` | property |
| `MembersText` | `public string MembersText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomCategoryVM](../KingdomCategoryVM)
- [same namespace KingdomItemVM](../KingdomItemVM)
- [same namespace KingdomManagementVM](../KingdomManagementVM)
- [same namespace LeaveKingdomPermissionEvent](../LeaveKingdomPermissionEvent)
