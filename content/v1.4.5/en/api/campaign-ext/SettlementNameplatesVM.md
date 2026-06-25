---
title: "SettlementNameplatesVM"
description: "Auto-generated class reference for SettlementNameplatesVM."
---
# SettlementNameplatesVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplatesVM.cs`

## Overview

`SettlementNameplatesVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SmallNameplates` | `public MBBindingList<SettlementNameplateVM> SmallNameplates { get; set; }` |
| `MediumNameplates` | `public MBBindingList<SettlementNameplateVM> MediumNameplates { get; set; }` |
| `LargeNameplates` | `public MBBindingList<SettlementNameplateVM> LargeNameplates { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshValues();
```

### Initialize
`public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>> settlements)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.Initialize(iEnumerable<Tuple<Settlement, settlements);
```

### Update
`public void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.Update();
```

### GetNameplateOfSettlement
`public SettlementNameplateVM GetNameplateOfSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the nameplate of settlement value held by the this instance.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
var result = settlementNameplatesVM.GetNameplateOfSettlement(settlement);
```

### OnRebelliousClanDisbandedAtSettlement
`public void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**Purpose:** **Purpose:** Invoked when the rebellious clan disbanded at settlement event is raised.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.OnRebelliousClanDisbandedAtSettlement(settlement, clan);
```

### RefreshRelationsOfNameplates
`public void RefreshRelationsOfNameplates()`

**Purpose:** **Purpose:** Keeps the display or cache of relations of nameplates in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshRelationsOfNameplates();
```

### RefreshDynamicPropertiesOfNameplates
`public void RefreshDynamicPropertiesOfNameplates(bool forceUpdate)`

**Purpose:** **Purpose:** Keeps the display or cache of dynamic properties of nameplates in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplatesVM from the subsystem API first
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshDynamicPropertiesOfNameplates(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.OnFinalize();
```

## See Also

- [Area Index](../)