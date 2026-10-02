---
title: "MapNotificationVM"
description: "MapNotificationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map, inheriting ViewModel; 13 exposed members (8 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNotificationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNotificationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapNotificationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNotificationVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 8 methods, 3 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map`, inheritance chain MapNotificationVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 8/13, properties 3/13), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public event Action<MapNotificationItemBaseVM>ReceiveNewNotification;` | event |
| `MapNotificationVM` | `public MapNotificationVM(INavigationHandler navigationHandler, Action<CampaignVec2>fastMoveCameraToPosition)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RegisterMapNotificationType` | `public void RegisterMapNotificationType(Type data, Type item)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnFrameTick` | `public void OnFrameTick(float dt)` | method |
| `OnMenuModeTick` | `public void OnMenuModeTick(float dt)` | method |
| `AddMapNotification` | `public void AddMapNotification(InformationData data)` | method |
| `RemoveAllNotifications` | `public void RemoveAllNotifications()` | method |
| `SetRemoveInputKey` | `public void SetRemoveInputKey(HotKey hotKey)` | method |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | property |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem` | property |
| `MBBindingList` | `public MBBindingList<MapNotificationItemBaseVM>NotificationItems` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
