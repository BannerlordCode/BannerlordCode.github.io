---
title: "PartyMarkerItemComparer"
description: "Auto-generated class reference for PartyMarkerItemComparer."
---
# PartyMarkerItemComparer

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>`
**Base:** `IComparer<SettlementNameplatePartyMarkerItemVM>`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplatePartyMarkersVM.cs`

## Overview

`PartyMarkerItemComparer` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(SettlementNameplatePartyMarkerItemVM x, SettlementNameplatePartyMarkerItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of PartyMarkerItemComparer from the subsystem API first
PartyMarkerItemComparer partyMarkerItemComparer = ...;
var result = partyMarkerItemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyMarkerItemComparer partyMarkerItemComparer = ...;
partyMarkerItemComparer.Compare(x, y);
```

## See Also

- [Area Index](../)