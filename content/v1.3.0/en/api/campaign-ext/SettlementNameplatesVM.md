---
title: "SettlementNameplatesVM"
description: "Auto-generated class reference for SettlementNameplatesVM."
---
# SettlementNameplatesVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatesVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs`

## Overview

`SettlementNameplatesVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Nameplates` | `public MBBindingList<SettlementNameplateVM> Nameplates { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshValues();
```

### Initialize
`public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>> settlements)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.Initialize(iEnumerable<Tuple<Settlement, settlements);
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.Update();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshValues();
```

## See Also

- [Area Index](../)