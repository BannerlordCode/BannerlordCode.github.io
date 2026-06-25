---
title: "MissionMultiplayerSpectatorHUDVM"
description: "Auto-generated class reference for MissionMultiplayerSpectatorHUDVM."
---
# MissionMultiplayerSpectatorHUDVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSpectatorHUDVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/MissionMultiplayerSpectatorHUDVM.cs`

## Overview

`MissionMultiplayerSpectatorHUDVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpectatedPlayerNeutrality` | `public int SpectatedPlayerNeutrality { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `IsSpectatingAgent` | `public bool IsSpectatingAgent { get; set; }` |
| `AgentHasCompassElement` | `public bool AgentHasCompassElement { get; set; }` |
| `AgentHasMount` | `public bool AgentHasMount { get; set; }` |
| `ShowAgentHealth` | `public bool ShowAgentHealth { get; set; }` |
| `AgentHasRangedWeapon` | `public bool AgentHasRangedWeapon { get; set; }` |
| `AgentHasShield` | `public bool AgentHasShield { get; set; }` |
| `CanTakeControlOfSpectatedAgent` | `public bool CanTakeControlOfSpectatedAgent { get; set; }` |
| `SpectatedPlayerName` | `public string SpectatedPlayerName { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `SpectatedPlayerHealthLimit` | `public float SpectatedPlayerHealthLimit { get; set; }` |
| `SpectatedPlayerCurrentHealth` | `public float SpectatedPlayerCurrentHealth { get; set; }` |
| `SpectatedPlayerMountCurrentHealth` | `public float SpectatedPlayerMountCurrentHealth { get; set; }` |
| `SpectatedPlayerMountHealthLimit` | `public float SpectatedPlayerMountHealthLimit { get; set; }` |
| `SpectatedPlayerShieldCurrentHealth` | `public float SpectatedPlayerShieldCurrentHealth { get; set; }` |
| `SpectatedPlayerShieldHealthLimit` | `public float SpectatedPlayerShieldHealthLimit { get; set; }` |
| `SpectatedPlayerAmmoAmount` | `public int SpectatedPlayerAmmoAmount { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionMultiplayerSpectatorHUDVM from the subsystem API first
MissionMultiplayerSpectatorHUDVM missionMultiplayerSpectatorHUDVM = ...;
missionMultiplayerSpectatorHUDVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionMultiplayerSpectatorHUDVM from the subsystem API first
MissionMultiplayerSpectatorHUDVM missionMultiplayerSpectatorHUDVM = ...;
missionMultiplayerSpectatorHUDVM.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerSpectatorHUDVM missionMultiplayerSpectatorHUDVM = ...;
missionMultiplayerSpectatorHUDVM.RefreshValues();
```

## See Also

- [Area Index](../)