---
title: "SettlementNameplatePartyMarkersVM"
description: "Auto-generated class reference for SettlementNameplatePartyMarkersVM."
---
# SettlementNameplatePartyMarkersVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatePartyMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplatePartyMarkersVM.cs`

## Overview

`SettlementNameplatePartyMarkersVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartiesInSettlement` | `public MBBindingList<SettlementNameplatePartyMarkerItemVM> PartiesInSettlement { get; set; }` |

## Key Methods

### Compare
`public int Compare(SettlementNameplatePartyMarkerItemVM x, SettlementNameplatePartyMarkerItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SettlementNameplatePartyMarkersVM from the subsystem API first
SettlementNameplatePartyMarkersVM settlementNameplatePartyMarkersVM = ...;
var result = settlementNameplatePartyMarkersVM.Compare(x, y);
```

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SettlementNameplatePartyMarkersVM from the subsystem API first
SettlementNameplatePartyMarkersVM settlementNameplatePartyMarkersVM = ...;
settlementNameplatePartyMarkersVM.RegisterEvents();
```

### UnloadEvents
`public void UnloadEvents()`

**Purpose:** **Purpose:** Executes the UnloadEvents logic.

```csharp
// Obtain an instance of SettlementNameplatePartyMarkersVM from the subsystem API first
SettlementNameplatePartyMarkersVM settlementNameplatePartyMarkersVM = ...;
settlementNameplatePartyMarkersVM.UnloadEvents();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNameplatePartyMarkersVM settlementNameplatePartyMarkersVM = ...;
settlementNameplatePartyMarkersVM.Compare(x, y);
```

## See Also

- [Area Index](../)