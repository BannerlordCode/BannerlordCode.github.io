<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPMatchmakingSelectionInfoVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPMatchmakingSelectionInfoVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingSelectionInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingSelectionInfoVM.cs`

## Overview

`MPMatchmakingSelectionInfoVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ExtraInfos` | `public MBBindingList<StringPairItemVM> ExtraInfos { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateForGameType
`public void UpdateForGameType(string gameTypeStr)`

**Purpose:** Updates the state or data of `for game type`.

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** Sets the value or state of `enabled`.

## Usage Example

```csharp
var value = new MPMatchmakingSelectionInfoVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)