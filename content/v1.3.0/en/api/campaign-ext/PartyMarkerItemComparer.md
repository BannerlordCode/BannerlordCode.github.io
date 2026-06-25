---
title: "PartyMarkerItemComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyMarkerItemComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyMarkerItemComparer

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>`
**Base:** `IComparer<SettlementNameplatePartyMarkerItemVM>`
**Area:** campaign-ext

## Overview

`PartyMarkerItemComparer` lives in `SandBox.ViewModelCollection.Nameplate`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartiesInSettlement` | `public MBBindingList<SettlementNameplatePartyMarkerItemVM> PartiesInSettlement { get; set; }` |

## Key Methods

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### UnloadEvents
`public void UnloadEvents()`

**Purpose:** Handles logic related to `unload events`.

### Compare
`public int Compare(SettlementNameplatePartyMarkerItemVM x, SettlementNameplatePartyMarkerItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a PartyMarkerItemComparer instance from game state, then call one of its public methods
var value = new PartyMarkerItemComparer();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
