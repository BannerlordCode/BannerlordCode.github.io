<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanLeaderboardVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanLeaderboardVM.cs`

## Overview

`MPLobbyClanLeaderboardVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `LeaderboardText` | `public string LeaderboardText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GamesWonText` | `public string GamesWonText { get; set; }` |
| `GamesLostText` | `public string GamesLostText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ClanItems` | `public MBBindingList<MPLobbyClanItemVM> ClanItems { get; set; }` |
| `SortController` | `public MPLobbyClanLeaderboardSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

## Usage Example

```csharp
var value = new MPLobbyClanLeaderboardVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)