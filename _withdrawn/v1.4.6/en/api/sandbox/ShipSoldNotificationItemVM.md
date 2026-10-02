---
title: "ShipSoldNotificationItemVM"
description: "ShipSoldNotificationItemVM: a public class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes, inheriting SettlementNotificationItemBaseVM; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipSoldNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class ShipSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ShipSoldNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is ShipSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipSoldNotificationItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`, inheritance chain ShipSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Ship` | `public Ship Ship` | property |
| `SettlementParty` | `public PartyBase SettlementParty` | property |
| `HeroParty` | `public PartyBase HeroParty` | property |
| `ShipSoldNotificationItemVM` | `public ShipSoldNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, Ship ship, PartyBase settlementParty, PartyBase heroParty, int amount, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewTransaction` | `public void AddNewTransaction(int amount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM/)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM/)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM/)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM/)
