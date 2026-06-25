---
title: "MPLobbyMenuVM"
description: "Auto-generated class reference for MPLobbyMenuVM."
---
# MPLobbyMenuVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyMenuVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyMenuVM from the subsystem API first
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPLobbyMenuVM from the subsystem API first
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.OnFinalize();
```

### SetPage
`public void SetPage(MPLobbyVM.LobbyPage lobbyPage)`

**Purpose:** Assigns a new value to `page` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyMenuVM from the subsystem API first
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.SetPage(lobbyPage);
```

### ExecuteExit
`public async void ExecuteExit()`

**Purpose:** Runs the operation or workflow associated with `exit`.

```csharp
// Obtain an instance of MPLobbyMenuVM from the subsystem API first
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.ExecuteExit();
```

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**Purpose:** Invoked when the `supported features refreshed` event is raised.

```csharp
// Obtain an instance of MPLobbyMenuVM from the subsystem API first
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.OnSupportedFeaturesRefreshed(supportedFeatures);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.RefreshValues();
```

## See Also

- [Area Index](../)