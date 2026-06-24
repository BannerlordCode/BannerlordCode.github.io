<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClassFilterClassGroupItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClassFilterClassGroupItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterClassGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter/MPLobbyClassFilterClassGroupItemVM.cs`

## Overview

`MPLobbyClassFilterClassGroupItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClassGroup` | `public MPHeroClassGroup ClassGroup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Classes` | `public MBBindingList<MPLobbyClassFilterClassItemVM> Classes { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### AddClass
`public void AddClass(BasicCultureObject culture, MPHeroClass heroClass, Action<MPLobbyClassFilterClassItemVM> onSelect)`

**Purpose:** Adds `class` to the current collection or state.

## Usage Example

```csharp
var value = new MPLobbyClassFilterClassGroupItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)