---
title: "TroopGivenToSettlementNotificationItemVM"
description: "TroopGivenToSettlementNotificationItemVM: a public class in SandBox.ViewModelCollection, inheriting SettlementNotificationItemBaseVM; 4 exposed members (1 methods, 2 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs."
---
# TroopGivenToSettlementNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TroopGivenToSettlementNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs`

## Overview

TroopGivenToSettlementNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is TroopGivenToSettlementNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopGivenToSettlementNotificationItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes) the module directory; inheritance chain TroopGivenToSettlementNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GiverHero` | `public Hero GiverHero` | property |
| `Troops` | `public TroopRoster Troops` | property |
| `TroopGivenToSettlementNotificationItemVM` | `public TroopGivenToSettlementNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, Hero giverHero, TroopRoster troops, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewAction` | `public void AddNewAction(TroopRoster newTroops)` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM)
