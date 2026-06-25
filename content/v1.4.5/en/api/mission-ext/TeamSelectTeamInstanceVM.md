---
title: "TeamSelectTeamInstanceVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamSelectTeamInstanceVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamSelectTeamInstanceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamSelectTeamInstanceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/TeamSelectTeamInstanceVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshFriends
`public void RefreshFriends(IEnumerable<MissionPeer> friends)`

**Purpose:** Refreshes the display or cache of `friends`.

### SetIsDisabled
`public void SetIsDisabled(bool isCurrentTeam, bool disabledForBalance)`

**Purpose:** Sets the value or state of `is disabled`.

### ExecuteSelectTeam
`public void ExecuteSelectTeam()`

**Purpose:** Executes the `select team` operation or workflow.

## Usage Example

```csharp
var value = new TeamSelectTeamInstanceVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)