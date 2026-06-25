---
title: "SettlementNotificationItemBaseVM"
description: "Auto-generated class reference for SettlementNotificationItemBaseVM."
---
# SettlementNotificationItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications/SettlementNotificationItemBaseVM.cs`

## Overview

`SettlementNotificationItemBaseVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CreatedTick` | `public int CreatedTick { get; set; }` |
| `CharacterName` | `public string CharacterName { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CharacterVisual` | `public CharacterImageIdentifierVM CharacterVisual { get; set; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with remove.

```csharp
// Obtain an instance of SettlementNotificationItemBaseVM from the subsystem API first
SettlementNotificationItemBaseVM settlementNotificationItemBaseVM = ...;
settlementNotificationItemBaseVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNotificationItemBaseVM settlementNotificationItemBaseVM = ...;
settlementNotificationItemBaseVM.ExecuteRemove();
```

## See Also

- [Area Index](../)