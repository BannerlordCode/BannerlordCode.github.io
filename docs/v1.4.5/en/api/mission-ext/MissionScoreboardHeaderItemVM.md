<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardHeaderItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardHeaderItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardHeaderItemVM : BindingListStringItem`
**Base:** `BindingListStringItem`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardHeaderItemVM.cs`

## Overview

`MissionScoreboardHeaderItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeaderID` | `public string HeaderID { get; set; }` |
| `IsIrregularStat` | `public bool IsIrregularStat { get; set; }` |
| `IsAvatarStat` | `public bool IsAvatarStat { get; set; }` |

## Usage Example

```csharp
var value = new MissionScoreboardHeaderItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)