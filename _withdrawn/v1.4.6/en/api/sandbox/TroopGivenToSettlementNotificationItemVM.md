---
title: "TroopGivenToSettlementNotificationItemVM"
description: "TroopGivenToSettlementNotificationItemVM: a public class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes, inheriting SettlementNotificationItemBaseVM; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopGivenToSettlementNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TroopGivenToSettlementNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TroopGivenToSettlementNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is TroopGivenToSettlementNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopGivenToSettlementNotificationItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`, inheritance chain TroopGivenToSettlementNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GiverHero` | `public Hero GiverHero` | property |
| `Troops` | `public TroopRoster Troops` | property |
| `TroopGivenToSettlementNotificationItemVM` | `public TroopGivenToSettlementNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, Hero giverHero, TroopRoster troops, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewAction` | `public void AddNewAction(TroopRoster newTroops)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM/)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM/)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM/)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM/)
