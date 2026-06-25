---
title: "MultiplayerClassLoadoutVM"
description: "Auto-generated class reference for MultiplayerClassLoadoutVM."
---
# MultiplayerClassLoadoutVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MultiplayerClassLoadoutVM.cs`

## Overview

`MultiplayerClassLoadoutVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Culture` | `public string Culture { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `IsSpawnTimerVisible` | `public bool IsSpawnTimerVisible { get; set; }` |
| `SpawnLabelText` | `public string SpawnLabelText { get; set; }` |
| `IsSpawnLabelVisible` | `public bool IsSpawnLabelVisible { get; set; }` |
| `ShowAttackerOrDefenderIcons` | `public bool ShowAttackerOrDefenderIcons { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `SpawnForfeitLabelText` | `public string SpawnForfeitLabelText { get; set; }` |
| `IsSpawnForfeitLabelVisible` | `public bool IsSpawnForfeitLabelVisible { get; set; }` |
| `Gold` | `public int Gold { get; set; }` |
| `Teammates` | `public MBBindingList<MPPlayerVM> Teammates { get; set; }` |
| `Enemies` | `public MBBindingList<MPPlayerVM> Enemies { get; set; }` |
| `HeroInformation` | `public HeroInformationVM HeroInformation { get; set; }` |
| `CurrentSelectedClass` | `public HeroClassVM CurrentSelectedClass { get; set; }` |
| `RemainingTimeText` | `public string RemainingTimeText { get; set; }` |
| `WarnRemainingTime` | `public bool WarnRemainingTime { get; set; }` |
| `Classes` | `public MBBindingList<HeroClassGroupVM> Classes { get; set; }` |
| `IsGoldEnabled` | `public bool IsGoldEnabled { get; set; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; set; }` |
| `WarmupInfoText` | `public string WarmupInfoText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.OnFinalize();
```

### RefreshPeerDivision
`public void RefreshPeerDivision(MissionPeer peer, int divisionType)`

**Purpose:** **Purpose:** Keeps the display or cache of peer division in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshPeerDivision(peer, 0);
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.Tick(0);
```

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**Purpose:** **Purpose:** Invoked when the peer equipment refreshed event is raised.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.OnPeerEquipmentRefreshed(peer);
```

### OnGoldUpdated
`public void OnGoldUpdated()`

**Purpose:** **Purpose:** Invoked when the gold updated event is raised.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.OnGoldUpdated();
```

### RefreshRemainingTime
`public void RefreshRemainingTime()`

**Purpose:** **Purpose:** Keeps the display or cache of remaining time in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerClassLoadoutVM from the subsystem API first
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshRemainingTime();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshValues();
```

## See Also

- [Area Index](../)