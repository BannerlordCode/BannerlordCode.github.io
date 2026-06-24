<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameplateDistanceComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NameplateDistanceComparer

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class NameplateDistanceComparer : IComparer<PartyNameplateVM>`
**Base:** `IComparer<PartyNameplateVM>`
**Area:** campaign-ext

## Overview

`NameplateDistanceComparer` lives in `SandBox.ViewModelCollection.Nameplate`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Nameplates` | `public MBBindingList<PartyNameplateVM> Nameplates { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Compare
`public int Compare(PartyNameplateVM x, PartyNameplateVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a NameplateDistanceComparer instance from game state, then call one of its public methods
var value = new NameplateDistanceComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
