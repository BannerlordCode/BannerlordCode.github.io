---
title: "MissionMultiplayerHUDExtensionVM"
description: "Auto-generated class reference for MissionMultiplayerHUDExtensionVM."
---
# MissionMultiplayerHUDExtensionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerHUDExtensionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/MissionMultiplayerHUDExtensionVM.cs`

## Overview

`MissionMultiplayerHUDExtensionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOrderActive` | `public bool IsOrderActive { get; set; }` |
| `CommanderInfo` | `public CommanderInfoVM CommanderInfo { get; set; }` |
| `SpectatorControls` | `public MissionMultiplayerSpectatorHUDVM SpectatorControls { get; set; }` |
| `Teammates` | `public MBBindingList<MPPlayerVM> Teammates { get; set; }` |
| `Enemies` | `public MBBindingList<MPPlayerVM> Enemies { get; set; }` |
| `AllyBanner` | `public BannerImageIdentifierVM AllyBanner { get; set; }` |
| `EnemyBanner` | `public BannerImageIdentifierVM EnemyBanner { get; set; }` |
| `IsRoundCountdownAvailable` | `public bool IsRoundCountdownAvailable { get; set; }` |
| `IsRoundCountdownSuspended` | `public bool IsRoundCountdownSuspended { get; set; }` |
| `ShowTeamScores` | `public bool ShowTeamScores { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `WarnRemainingTime` | `public bool WarnRemainingTime { get; set; }` |
| `AllyTeamScore` | `public int AllyTeamScore { get; set; }` |
| `EnemyTeamScore` | `public int EnemyTeamScore { get; set; }` |
| `AllyTeamColor` | `public string AllyTeamColor { get; set; }` |
| `AllyTeamColor2` | `public string AllyTeamColor2 { get; set; }` |
| `EnemyTeamColor` | `public string EnemyTeamColor { get; set; }` |
| `EnemyTeamColor2` | `public string EnemyTeamColor2 { get; set; }` |
| `ShowHud` | `public bool ShowHud { get; set; }` |
| `ShowCommanderInfo` | `public bool ShowCommanderInfo { get; set; }` |
| `ShowPowerLevels` | `public bool ShowPowerLevels { get; set; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; set; }` |
| `WarmupInfoText` | `public string WarmupInfoText { get; set; }` |
| `GeneralWarningCountdown` | `public int GeneralWarningCountdown { get; set; }` |
| `IsGeneralWarningCountdownActive` | `public bool IsGeneralWarningCountdownActive { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionMultiplayerHUDExtensionVM from the subsystem API first
MissionMultiplayerHUDExtensionVM missionMultiplayerHUDExtensionVM = ...;
missionMultiplayerHUDExtensionVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionMultiplayerHUDExtensionVM from the subsystem API first
MissionMultiplayerHUDExtensionVM missionMultiplayerHUDExtensionVM = ...;
missionMultiplayerHUDExtensionVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionMultiplayerHUDExtensionVM from the subsystem API first
MissionMultiplayerHUDExtensionVM missionMultiplayerHUDExtensionVM = ...;
missionMultiplayerHUDExtensionVM.Tick(0);
```

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**Purpose:** Invoked when the spectated agent focus in event is raised.

```csharp
// Obtain an instance of MissionMultiplayerHUDExtensionVM from the subsystem API first
MissionMultiplayerHUDExtensionVM missionMultiplayerHUDExtensionVM = ...;
missionMultiplayerHUDExtensionVM.OnSpectatedAgentFocusIn(followedAgent);
```

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedPeer)`

**Purpose:** Invoked when the spectated agent focus out event is raised.

```csharp
// Obtain an instance of MissionMultiplayerHUDExtensionVM from the subsystem API first
MissionMultiplayerHUDExtensionVM missionMultiplayerHUDExtensionVM = ...;
missionMultiplayerHUDExtensionVM.OnSpectatedAgentFocusOut(followedPeer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerHUDExtensionVM missionMultiplayerHUDExtensionVM = ...;
missionMultiplayerHUDExtensionVM.RefreshValues();
```

## See Also

- [Area Index](../)