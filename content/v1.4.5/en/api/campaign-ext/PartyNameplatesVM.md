---
title: "PartyNameplatesVM"
description: "Auto-generated class reference for PartyNameplatesVM."
---
# PartyNameplatesVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplatesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyNameplatesVM.cs`

## Overview

`PartyNameplatesVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Nameplates` | `public MBBindingList<PartyNameplateVM> Nameplates { get; set; }` |
| `PlayerNameplate` | `public PartyPlayerNameplateVM PlayerNameplate { get; set; }` |

## Key Methods

### Compare
`public int Compare(PartyNameplateVM x, PartyNameplateVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
var result = partyNameplatesVM.Compare(x, y);
```

### Get
`public PartyNameplateVM Get()`

**Purpose:** Reads the this instance's value or state and returns it.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
var result = partyNameplatesVM.Get();
```

### Release
`public void Release(PartyNameplateVM nameplate)`

**Purpose:** Executes the Release logic.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
partyNameplatesVM.Release(nameplate);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
partyNameplatesVM.RefreshValues();
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
partyNameplatesVM.Initialize();
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
partyNameplatesVM.Update();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of PartyNameplatesVM from the subsystem API first
PartyNameplatesVM partyNameplatesVM = ...;
partyNameplatesVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyNameplatesVM partyNameplatesVM = ...;
partyNameplatesVM.Compare(x, y);
```

## See Also

- [Area Index](../)