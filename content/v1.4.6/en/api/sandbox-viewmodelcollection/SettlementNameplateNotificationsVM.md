---
title: "SettlementNameplateNotificationsVM"
description: "SettlementNameplateNotificationsVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 7 exposed members (4 methods, 2 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs."
---
# SettlementNameplateNotificationsVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateNotificationsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs`

## Overview

SettlementNameplateNotificationsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNameplateNotificationsVM → ViewModel. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateNotificationsVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes) the module directory; inheritance chain SettlementNameplateNotificationsVM → ViewModel. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEventsRegistered` | `public bool IsEventsRegistered` | property |
| `SettlementNameplateNotificationsVM` | `public SettlementNameplateNotificationsVM(Settlement settlement)` | constructor |
| `Tick` | `public void Tick()` | method |
| `RegisterEvents` | `public void RegisterEvents()` | method |
| `UnloadEvents` | `public void UnloadEvents()` | method |
| `IsValidItemForNotification` | `public bool IsValidItemForNotification(ItemRosterElement item)` | method |
| `MBBindingList` | `public MBBindingList<SettlementNotificationItemBaseVM>Notifications` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM)
