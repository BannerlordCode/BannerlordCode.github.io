---
title: "MapNotificationItemBaseVM"
description: "MapNotificationItemBaseVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 19 exposed members (9 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs."
---
# MapNotificationItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs`

## Overview

MapNotificationItemBaseVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNotificationItemBaseVM → ViewModel. It exposes 19 public/protected members: 9 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationItemBaseVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes) the module directory; inheritance chain MapNotificationItemBaseVM → ViewModel. The surface is method-led (methods 9/19, properties 9/19), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NavigationHandler` | `public INavigationHandler NavigationHandler` | property |
| `Data` | `public InformationData Data` | property |
| `MapNotificationItemBaseVM` | `public MapNotificationItemBaseVM(InformationData data)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetNavigationHandler` | `public void SetNavigationHandler(INavigationHandler navigationHandler)` | method |
| `SetFastMoveCameraToPosition` | `public void SetFastMoveCameraToPosition(Action<CampaignVec2>fastMoveCameraToPosition)` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | method |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | method |
| `ManualRefreshRelevantStatus` | `public virtual void ManualRefreshRelevantStatus()` | method |
| `SetRemoveInputKey` | `public void SetRemoveInputKey(HotKey hotKey)` | method |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | property |
| `IsFocused` | `public bool IsFocused` | property |
| `NotificationIdentifier` | `public string NotificationIdentifier` | property |
| `TitleText` | `public string TitleText` | property |
| `ForceInspection` | `public bool ForceInspection` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `SoundId` | `public string SoundId` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM)
- [same namespace AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM)
- [same namespace AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM)
- [same namespace AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM)
