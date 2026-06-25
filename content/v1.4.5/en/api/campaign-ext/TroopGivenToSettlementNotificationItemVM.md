---
title: "TroopGivenToSettlementNotificationItemVM"
description: "Auto-generated class reference for TroopGivenToSettlementNotificationItemVM."
---
# TroopGivenToSettlementNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class TroopGivenToSettlementNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs`

## Overview

`TroopGivenToSettlementNotificationItemVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GiverHero` | `public Hero GiverHero { get; }` |
| `Troops` | `public TroopRoster Troops { get; }` |

## Key Methods

### AddNewAction
`public void AddNewAction(TroopRoster newTroops)`

**Purpose:** **Purpose:** Adds new action to the current collection or state.

```csharp
// Obtain an instance of TroopGivenToSettlementNotificationItemVM from the subsystem API first
TroopGivenToSettlementNotificationItemVM troopGivenToSettlementNotificationItemVM = ...;
troopGivenToSettlementNotificationItemVM.AddNewAction(newTroops);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopGivenToSettlementNotificationItemVM troopGivenToSettlementNotificationItemVM = ...;
troopGivenToSettlementNotificationItemVM.AddNewAction(newTroops);
```

## See Also

- [Area Index](../)