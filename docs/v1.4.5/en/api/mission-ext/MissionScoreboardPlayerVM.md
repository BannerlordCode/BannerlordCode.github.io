<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardPlayerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerVM : MPPlayerVM`
**Base:** `MPPlayerVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerVM.cs`

## Overview

`MissionScoreboardPlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `IsBot` | `public bool IsBot { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsTeammate` | `public bool IsTeammate { get; set; }` |
| `Ping` | `public int Ping { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsVoiceMuted` | `public bool IsVoiceMuted { get; set; }` |
| `IsTextMuted` | `public bool IsTextMuted { get; set; }` |
| `Stats` | `public MBBindingList<MissionScoreboardStatItemVM> Stats { get; set; }` |
| `MVPBadges` | `public MBBindingList<MissionScoreboardMVPItemVM> MVPBadges { get; set; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### UpdateAttributes
`public void UpdateAttributes(string attributes, int score)`

**Purpose:** Updates the state or data of `attributes`.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

### UpdateIsMuted
`public void UpdateIsMuted()`

**Purpose:** Updates the state or data of `is muted`.

### SetMVPBadgeCount
`public void SetMVPBadgeCount(int badgeCount)`

**Purpose:** Sets the value or state of `m v p badge count`.

## Usage Example

```csharp
var value = new MissionScoreboardPlayerVM();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)