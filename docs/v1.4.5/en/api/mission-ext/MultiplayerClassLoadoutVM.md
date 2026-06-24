<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MultiplayerClassLoadoutVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshPeerDivision
`public void RefreshPeerDivision(MissionPeer peer, int divisionType)`

**Purpose:** Refreshes the display or cache of `peer division`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**Purpose:** Called when the `peer equipment refreshed` event is raised.

### OnGoldUpdated
`public void OnGoldUpdated()`

**Purpose:** Called when the `gold updated` event is raised.

### RefreshRemainingTime
`public void RefreshRemainingTime()`

**Purpose:** Refreshes the display or cache of `remaining time`.

## Usage Example

```csharp
var value = new MultiplayerClassLoadoutVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)