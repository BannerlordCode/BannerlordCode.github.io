---
title: "LoadingWindowViewModel"
description: "Auto-generated class reference for LoadingWindowViewModel."
---
# LoadingWindowViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`

## Overview

`LoadingWindowViewModel` is the view-model behind the loading window, and it has one job: decide whether the window should describe a multiplayer mission or show the generic loading art. It is `public class LoadingWindowViewModel : ViewModel` (`LoadingWindowViewModel.cs:10`) and its public state is three strings plus one flag — `LoadingImageName` (`LoadingWindowViewModel.cs:323`), the inherited `TitleText`/`DescriptionText`/`GameModeText`, and `CurrentlyShowingMultiplayer` (`LoadingWindowViewModel.cs:15`).

The instance is created by the loading-window manager with two delegates: `new LoadingWindowViewModel(new LoadImageDelegate(this.LoadImage), new UnloadImageDelegate(this.UnloadImage))` (`GauntletDefaultLoadingWindowManager.cs:22`). So image loading is *not* this class's job — it asks, through the delegate, and is handed a name back. The constructor already calls the load delegate once for image index `_currentImage + 1` and stores the result in `LoadingImageName` (`LoadingWindowViewModel.cs:25`).

Two switches drive it. `HandleEnable` runs when the view-model's `Enabled` property is set true (`LoadingWindowViewModel.cs:193`) and picks a variant immediately. `Update()` — which is `internal` (`LoadingWindowViewModel.cs:31`) — re-checks every tick and switches between variants if the eligibility changed.

## Mental Model

Eligibility is a four-part conjunction, and one of the parts is a magic string. `IsEligableForMultiplayerLoading` requires `_isMultiplayer`, a non-null `Mission.Current`, an active state that is a `MissionState`, and — the fourth — that `MissionName != "MultiplayerPractice"` (`LoadingWindowViewModel.cs:62`). The practice battle is therefore deliberately excluded: it loads through the generic path even though it is multiplayer. There is no constant for that string; it is a literal compared against `MissionState.MissionName`.

`SetForMultiplayer` does its work by string-matching the mission name through a chain of `!(missionName == ...)` tests — `MultiplayerTeamDeathmatch`, `MultiplayerSiege`, `MultiplayerBattle`, `MultiplayerCaptain`, `MultiplayerSkirmish` (`LoadingWindowViewModel.cs:71` onward) — and picks the image and text for each. A multiplayer mission whose name is none of those falls through the whole chain, so it is eligible but gets no specific artwork.

The flag is a state machine, not a query. `CurrentlyShowingMultiplayer` is private-set and only written inside `SetForMultiplayer`/`SetForEmpty` (`LoadingWindowViewModel.cs:133`, `LoadingWindowViewModel.cs:143`). `Update` compares the *eligibility* against the *flag* and calls exactly one setter (`LoadingWindowViewModel.cs:36`, `LoadingWindowViewModel.cs:41`) — which is why `SetForEmpty` has to clear the flag itself (`LoadingWindowViewModel.cs:143`) rather than the caller.

`SetForEmpty` blanks all three text properties to `""` (`LoadingWindowViewModel.cs:139`) and advances the generic image. The generic image index is a wraparound over `_totalGenericImageCount`, computed as `(this._currentImage >= 1) ? this._currentImage : this._totalGenericImageCount` (`LoadingWindowViewModel.cs:149`) — so if `_totalGenericImageCount` is ever 0 the arithmetic goes negative. The count comes from the manager that owns the image delegate, not from this class.

`Update` is `internal`, so it is not callable from a mod assembly. The manager that created the view-model drives it; a mod wanting to force a refresh has to go through that manager rather than the view-model.

## How to use

**Getting one.** Do not construct it — the loading-window manager owns the instance and the image delegates (`GauntletDefaultLoadingWindowManager.cs:22`). Read `CurrentlyShowingMultiplayer` to know which variant is on screen; change the input by changing what the mission is, not the view-model.

**Typical use** — reading the window's current variant from your own loading hook:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI;

public static class MyLoadingWatcher
{
    public static void Report()
    {
        // A multiplayer mission, except practice, gets the MP variant:
        // the check is _isMultiplayer && Mission.Current != null &&
        // active state is MissionState && MissionName != "MultiplayerPractice"
        // (LoadingWindowViewModel.cs:62).
        bool inMission = Mission.Current != null;
        bool inGameState = TaleWorlds.Core.Game.Current.GameStateManager.ActiveState != null;

        if (inMission && inGameState)
        {
            MyLog.Write("loading window: mission load in progress");
        }
    }
}
```

`LoadingWindowViewModel.IsEligableForMultiplayerLoading` is the private predicate behind `CurrentlyShowingMultiplayer` (`LoadingWindowViewModel.cs:62`); the `MissionState.MissionName` it compares against is the public way to ask the same question yourself.

**Most common mistake:** reading `CurrentlyShowingMultiplayer` as "this is a multiplayer game".

```csharp
if (vm.CurrentlyShowingMultiplayer)
{
    // Can be false during a real multiplayer mission.
}
```

The flag reflects which *artwork* is loaded, not which mode the session is in, and it is only written by the two setters — so it starts false and stays false until `HandleEnable` or `Update` runs with eligibility true (`LoadingWindowViewModel.cs:36`). It is also false for `MultiplayerPractice` by design (`LoadingWindowViewModel.cs:62`). If you need the session mode, ask `Game.Current.GameStateManager.ActiveState is MissionState` and inspect `MissionName` directly, as in the example, rather than trusting the window's presentation state.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentlyShowingMultiplayer` | `public bool CurrentlyShowingMultiplayer { get; }` |
| `Enabled` | `public bool Enabled { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameModeText` | `public string GameModeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `IsMultiplayer` | `public bool IsMultiplayer { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `LoadingImageName` | `public string LoadingImageName { get; set; }` |

## Key Methods

### SetTotalGenericImageCount
`public void SetTotalGenericImageCount(int totalGenericImageCount)`

**Purpose:** Assigns a new value to total generic image count and updates the object's internal state.

```csharp
// Obtain an instance of LoadingWindowViewModel from the subsystem API first
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.SetTotalGenericImageCount(0);
```

### UnloadImageDelegate
`public delegate void UnloadImageDelegate(int index)`

**Purpose:** Executes the UnloadImageDelegate logic.

```csharp
// Obtain an instance of LoadingWindowViewModel from the subsystem API first
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.UnloadImageDelegate(0);
```

### LoadImageDelegate
`public delegate void LoadImageDelegate(int index, out string imageName)`

**Purpose:** Reads image delegate from persistent storage or a stream.

```csharp
// Obtain an instance of LoadingWindowViewModel from the subsystem API first
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.LoadImageDelegate(0, imageName);
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
LoadingWindowViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)
- [GauntletDefaultLoadingWindowManager — the owner that constructs it and supplies the image delegates](../GauntletDefaultLoadingWindowManager)
- [中文页面](../../../../zh/api/mission-ext/LoadingWindowViewModel)