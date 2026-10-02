---
title: "CaravanTransactionNotificationItemVM"
description: "CaravanTransactionNotificationItemVM: a public class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes, inheriting SettlementNotificationItemBaseVM; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/CaravanTransactionNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CaravanTransactionNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class CaravanTransactionNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/CaravanTransactionNotificationItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CaravanTransactionNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/CaravanTransactionNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is CaravanTransactionNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CaravanTransactionNotificationItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`, inheritance chain CaravanTransactionNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/CaravanTransactionNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CaravanParty` | `public MobileParty CaravanParty` | property |
| `CaravanTransactionNotificationItemVM` | `public CaravanTransactionNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, MobileParty caravanParty, List<ValueTuple<EquipmentElement, int>>items, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewItems` | `public void AddNewItems(List<ValueTuple<EquipmentElement, int>>newItems)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM/)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM/)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM/)
- [same namespace SettlementNameplateNotificationsVM](../SettlementNameplateNotificationsVM/)
