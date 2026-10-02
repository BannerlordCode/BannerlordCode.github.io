---
title: "PrisonerSoldNotificationItemVM"
description: "PrisonerSoldNotificationItemVM: a public class in SandBox.ViewModelCollection, inheriting SettlementNotificationItemBaseVM; 3 exposed members (1 methods, 1 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/PrisonerSoldNotificationItemVM.cs."
---
# PrisonerSoldNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PrisonerSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/PrisonerSoldNotificationItemVM.cs`

## Overview

PrisonerSoldNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/PrisonerSoldNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is PrisonerSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonerSoldNotificationItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes) the module directory; inheritance chain PrisonerSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/PrisonerSoldNotificationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Party` | `public MobileParty Party` | property |
| `PrisonerSoldNotificationItemVM` | `public PrisonerSoldNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, MobileParty party, TroopRoster prisoners, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewPrisoners` | `public void AddNewPrisoners(TroopRoster newPrisoners)` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM)
- [same namespace SettlementNameplateNotificationsVM](../SettlementNameplateNotificationsVM)
