<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClassFilterFactionItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClassFilterFactionItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterFactionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter/MPLobbyClassFilterFactionItemVM.cs`

## Overview

`MPLobbyClassFilterFactionItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `SelectedClassItem` | `public MPLobbyClassFilterClassItemVM SelectedClassItem { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CultureCode` | `public string CultureCode { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `ClassGroups` | `public MBBindingList<MPLobbyClassFilterClassGroupItemVM> ClassGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MPLobbyClassFilterFactionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)