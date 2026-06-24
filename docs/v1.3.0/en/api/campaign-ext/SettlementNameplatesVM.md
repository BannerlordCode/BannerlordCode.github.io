<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplatesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### Initialize
`public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>> settlements)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new SettlementNameplatesVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)