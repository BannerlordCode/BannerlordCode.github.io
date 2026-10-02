---
title: "MapNotificationVM"
description: "MapNotificationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 13 exposed members (8 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs."
---
# MapNotificationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNotificationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs`

## Overview

MapNotificationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNotificationVM → ViewModel. It exposes 13 public/protected members: 8 methods, 3 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map) the module directory; inheritance chain MapNotificationVM → ViewModel. The surface is method-led (methods 8/13, properties 3/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
