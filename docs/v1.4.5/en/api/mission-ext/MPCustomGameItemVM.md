<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPCustomGameItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameItemVM.cs`

## Overview

`MPCustomGameItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameServerInfo` | `public GameServerEntry GameServerInfo { get; set; }` |
| `PremadeGameInfo` | `public PremadeGameEntry PremadeGameInfo { get; set; }` |
| `IsPasswordProtected` | `public bool IsPasswordProtected { get; set; }` |
| `IsFavorite` | `public bool IsFavorite { get; set; }` |
| `IsClanMatchItem` | `public bool IsClanMatchItem { get; set; }` |
| `IsOfficialServer` | `public bool IsOfficialServer { get; set; }` |
| `IsByOfficialServerProvider` | `public bool IsByOfficialServerProvider { get; set; }` |
| `IsCommunityServer` | `public bool IsCommunityServer { get; set; }` |
| `IsPingInfoAvailable` | `public bool IsPingInfoAvailable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `PlayerCount` | `public int PlayerCount { get; set; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; set; }` |
| `HostText` | `public string HostText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GameTypeText` | `public string GameTypeText { get; set; }` |
| `PlayerCountText` | `public string PlayerCountText { get; set; }` |
| `PingText` | `public string PingText { get; set; }` |
| `FirstFactionName` | `public string FirstFactionName { get; set; }` |
| `SecondFactionName` | `public string SecondFactionName { get; set; }` |
| `RegionName` | `public string RegionName { get; set; }` |
| `PremadeMatchTypeText` | `public string PremadeMatchTypeText { get; set; }` |
| `LoadedModulesHint` | `public BasicTooltipViewModel LoadedModulesHint { get; set; }` |

## Key Methods

### UpdateIsFavorite
`public void UpdateIsFavorite()`

**Purpose:** Updates the state or data of `is favorite`.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

### ExecuteFavorite
`public void ExecuteFavorite()`

**Purpose:** Executes the `favorite` operation or workflow.

### ExecuteJoin
`public void ExecuteJoin()`

**Purpose:** Executes the `join` operation or workflow.

### ExecuteViewHostOptions
`public void ExecuteViewHostOptions()`

**Purpose:** Executes the `view host options` operation or workflow.

## Usage Example

```csharp
var value = new MPCustomGameItemVM();
value.UpdateIsFavorite();
```

## See Also

- [Complete Class Catalog](../catalog)