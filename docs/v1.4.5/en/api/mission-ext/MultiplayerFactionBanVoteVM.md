<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerFactionBanVoteVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerFactionBanVoteVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBanVoteVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote/MultiplayerFactionBanVoteVM.cs`

## Overview

`MultiplayerFactionBanVoteVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Usage Example

```csharp
var value = new MultiplayerFactionBanVoteVM();
```

## See Also

- [Complete Class Catalog](../catalog)