---
title: "SettlementNameplateEventsVM"
description: "Auto-generated class reference for SettlementNameplateEventsVM."
---
# SettlementNameplateEventsVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateEventsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplateEventsVM.cs`

## Overview

`SettlementNameplateEventsVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEventsRegistered` | `public bool IsEventsRegistered { get; }` |
| `TrackQuests` | `public MBBindingList<QuestMarkerVM> TrackQuests { get; set; }` |
| `EventsList` | `public MBBindingList<SettlementNameplateEventItemVM> EventsList { get; set; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of SettlementNameplateEventsVM from the subsystem API first
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.Tick();
```

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SettlementNameplateEventsVM from the subsystem API first
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.RegisterEvents();
```

### UnloadEvents
`public void UnloadEvents()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SettlementNameplateEventsVM from the subsystem API first
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.UnloadEvents();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.Tick();
```

## See Also

- [Area Index](../)