<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanLeaderboardSortControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanLeaderboardSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanLeaderboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanLeaderboardSortControllerVM.cs`

## Overview

`MPLobbyClanLeaderboardSortControllerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `WinState` | `public int WinState { get; set; }` |
| `LossState` | `public int LossState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsWinSelected` | `public bool IsWinSelected { get; set; }` |
| `IsLossSelected` | `public bool IsLossSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new MPLobbyClanLeaderboardSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)