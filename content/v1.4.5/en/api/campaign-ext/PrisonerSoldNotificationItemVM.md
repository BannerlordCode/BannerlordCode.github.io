---
title: "PrisonerSoldNotificationItemVM"
description: "Auto-generated class reference for PrisonerSoldNotificationItemVM."
---
# PrisonerSoldNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class PrisonerSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/PrisonerSoldNotificationItemVM.cs`

## Overview

`PrisonerSoldNotificationItemVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public MobileParty Party { get; }` |

## Key Methods

### AddNewPrisoners
`public void AddNewPrisoners(TroopRoster newPrisoners)`

**Purpose:** Adds new prisoners to the current collection or state.

```csharp
// Obtain an instance of PrisonerSoldNotificationItemVM from the subsystem API first
PrisonerSoldNotificationItemVM prisonerSoldNotificationItemVM = ...;
prisonerSoldNotificationItemVM.AddNewPrisoners(newPrisoners);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PrisonerSoldNotificationItemVM prisonerSoldNotificationItemVM = ...;
prisonerSoldNotificationItemVM.AddNewPrisoners(newPrisoners);
```

## See Also

- [Area Index](../)