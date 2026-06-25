---
title: "MissionMultiplayerHUDExtensionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerHUDExtensionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerHUDExtensionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerHUDExtensionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/MissionMultiplayerHUDExtensionVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**Purpose:** Called when the `spectated agent focus in` event is raised.

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedPeer)`

**Purpose:** Called when the `spectated agent focus out` event is raised.

## Usage Example

```csharp
var value = new MissionMultiplayerHUDExtensionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)