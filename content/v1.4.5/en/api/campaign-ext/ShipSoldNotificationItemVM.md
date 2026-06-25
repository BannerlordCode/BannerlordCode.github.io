---
title: "ShipSoldNotificationItemVM"
description: "Auto-generated class reference for ShipSoldNotificationItemVM."
---
# ShipSoldNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class ShipSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/ShipSoldNotificationItemVM.cs`

## Overview

`ShipSoldNotificationItemVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Ship` | `public Ship Ship { get; }` |
| `SettlementParty` | `public PartyBase SettlementParty { get; }` |
| `HeroParty` | `public PartyBase HeroParty { get; }` |

## Key Methods

### AddNewTransaction
`public void AddNewTransaction(int amount)`

**Purpose:** **Purpose:** Adds new transaction to the current collection or state.

```csharp
// Obtain an instance of ShipSoldNotificationItemVM from the subsystem API first
ShipSoldNotificationItemVM shipSoldNotificationItemVM = ...;
shipSoldNotificationItemVM.AddNewTransaction(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipSoldNotificationItemVM shipSoldNotificationItemVM = ...;
shipSoldNotificationItemVM.AddNewTransaction(0);
```

## See Also

- [Area Index](../)