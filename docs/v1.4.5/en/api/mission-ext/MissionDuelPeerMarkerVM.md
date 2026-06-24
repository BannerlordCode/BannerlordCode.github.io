<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDuelPeerMarkerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDuelPeerMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelPeerMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelPeerMarkerVM.cs`

## Overview

`MissionDuelPeerMarkerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |
| `Distance` | `public float Distance { get; }` |
| `IsInDuel` | `public bool IsInDuel { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `ShouldShowInformation` | `public bool ShouldShowInformation { get; set; }` |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `HasDuelRequestForPlayer` | `public bool HasDuelRequestForPlayer { get; set; }` |
| `HasSentDuelRequest` | `public bool HasSentDuelRequest { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ActionDescriptionText` | `public string ActionDescriptionText { get; set; }` |
| `Bounty` | `public int Bounty { get; set; }` |
| `PreferredArenaType` | `public int PreferredArenaType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `SelectedPerks` | `public MBBindingList<MPPerkVM> SelectedPerks { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `screen position`.

### UpdateBounty
`public void UpdateBounty()`

**Purpose:** Updates the state or data of `bounty`.

### OnDuelStarted
`public void OnDuelStarted()`

**Purpose:** Called when the `duel started` event is raised.

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** Called when the `duel ended` event is raised.

### UpdateCurentDuelStatus
`public void UpdateCurentDuelStatus(bool isInDuel)`

**Purpose:** Updates the state or data of `curent duel status`.

### RefreshPerkSelection
`public void RefreshPerkSelection()`

**Purpose:** Refreshes the display or cache of `perk selection`.

## Usage Example

```csharp
var value = new MissionDuelPeerMarkerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)