---
title: "TeamSelectTeamInstanceVM"
description: "Auto-generated class reference for TeamSelectTeamInstanceVM."
---
# TeamSelectTeamInstanceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamSelectTeamInstanceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/TeamSelectTeamInstanceVM.cs`

## Overview

`TeamSelectTeamInstanceVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureId` | `public string CultureId { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `IsSiege` | `public bool IsSiege { get; set; }` |
| `DisplayedPrimary` | `public string DisplayedPrimary { get; set; }` |
| `DisplayedSecondary` | `public string DisplayedSecondary { get; set; }` |
| `DisplayedSecondarySub` | `public string DisplayedSecondarySub { get; set; }` |
| `LockText` | `public string LockText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `FriendAvatars` | `public MBBindingList<MPPlayerVM> FriendAvatars { get; set; }` |
| `HasExtraFriends` | `public bool HasExtraFriends { get; set; }` |
| `FriendsExtraText` | `public string FriendsExtraText { get; set; }` |
| `FriendsExtraHint` | `public HintViewModel FriendsExtraHint { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TeamSelectTeamInstanceVM from the subsystem API first
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of TeamSelectTeamInstanceVM from the subsystem API first
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.OnFinalize();
```

### RefreshFriends
`public void RefreshFriends(IEnumerable<MissionPeer> friends)`

**Purpose:** Keeps the display or cache of `friends` in sync with the underlying state.

```csharp
// Obtain an instance of TeamSelectTeamInstanceVM from the subsystem API first
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.RefreshFriends(friends);
```

### SetIsDisabled
`public void SetIsDisabled(bool isCurrentTeam, bool disabledForBalance)`

**Purpose:** Assigns a new value to `is disabled` and updates the object's internal state.

```csharp
// Obtain an instance of TeamSelectTeamInstanceVM from the subsystem API first
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.SetIsDisabled(false, false);
```

### ExecuteSelectTeam
`public void ExecuteSelectTeam()`

**Purpose:** Runs the operation or workflow associated with `select team`.

```csharp
// Obtain an instance of TeamSelectTeamInstanceVM from the subsystem API first
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.ExecuteSelectTeam();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.RefreshValues();
```

## See Also

- [Area Index](../)