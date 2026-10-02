---
title: "MapNotificationItemBaseVM"
description: "MapNotificationItemBaseVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes, inheriting ViewModel; 19 exposed members (9 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNotificationItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapNotificationItemBaseVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 9 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationItemBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`, inheritance chain MapNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 9/19, properties 9/19), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM/)
- [same namespace AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM/)
- [same namespace AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM/)
- [same namespace AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM/)
