---
title: "ItemSoldNotificationItemVM"
description: "ItemSoldNotificationItemVM: a public class in SandBox.ViewModelCollection, inheriting SettlementNotificationItemBaseVM; 5 exposed members (1 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs."
---
# ItemSoldNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class ItemSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs`

## Overview

ItemSoldNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is ItemSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemSoldNotificationItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes) the module directory; inheritance chain ItemSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item` | `public ItemRosterElement Item` | property |
| `ReceiverParty` | `public PartyBase ReceiverParty` | property |
| `PayerParty` | `public PartyBase PayerParty` | property |
| `ItemSoldNotificationItemVM` | `public ItemSoldNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, PartyBase receiverParty, PartyBase payerParty, ItemRosterElement item, int number, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewTransaction` | `public void AddNewTransaction(int amount)` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM)
- [same namespace SettlementNameplateNotificationsVM](../SettlementNameplateNotificationsVM)
