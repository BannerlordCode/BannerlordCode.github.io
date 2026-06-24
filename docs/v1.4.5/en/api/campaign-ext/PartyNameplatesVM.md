<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyNameplatesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyNameplatesVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplatesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyNameplatesVM.cs`

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

**Purpose:** Handles logic related to `compare`.

### Get
`public PartyNameplateVM Get()`

**Purpose:** Gets the current value of `get`.

### Release
`public void Release(PartyNameplateVM nameplate)`

**Purpose:** Handles logic related to `release`.

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

## Usage Example

```csharp
var value = new PartyNameplatesVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)