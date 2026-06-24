<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyMenuVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyMenuVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyMenuVM.cs`

## Overview

`MPLobbyMenuVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasProfileNotification` | `public bool HasProfileNotification { get; set; }` |
| `IsClanSupported` | `public bool IsClanSupported { get; set; }` |
| `IsMatchmakingSupported` | `public bool IsMatchmakingSupported { get; set; }` |
| `PageIndex` | `public int PageIndex { get; set; }` |
| `HomeText` | `public string HomeText { get; set; }` |
| `MatchmakingText` | `public string MatchmakingText { get; set; }` |
| `ProfileText` | `public string ProfileText { get; set; }` |
| `ArmoryText` | `public string ArmoryText { get; set; }` |
| `PreviousPageInputKey` | `public InputKeyItemVM PreviousPageInputKey { get; set; }` |
| `NextPageInputKey` | `public InputKeyItemVM NextPageInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetPage
`public void SetPage(MPLobbyVM.LobbyPage lobbyPage)`

**Purpose:** Sets the value or state of `page`.

### ExecuteExit
`public async void ExecuteExit()`

**Purpose:** Executes the `exit` operation or workflow.

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**Purpose:** Called when the `supported features refreshed` event is raised.

## Usage Example

```csharp
var value = new MPLobbyMenuVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)