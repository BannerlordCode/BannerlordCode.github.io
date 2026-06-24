<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplatePartyMarkersVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplatePartyMarkersVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatePartyMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs`

## Overview

`SettlementNameplatePartyMarkersVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new SettlementNameplatePartyMarkersVM();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)