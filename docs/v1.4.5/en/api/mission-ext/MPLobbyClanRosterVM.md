<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanRosterVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanRosterVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanRosterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanRosterVM.cs`

## Overview

`MPLobbyClanRosterVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsMemberActionsActive` | `public bool IsMemberActionsActive { get; set; }` |
| `IsPrivilegedMember` | `public bool IsPrivilegedMember { get; set; }` |
| `RosterText` | `public string RosterText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `BadgeText` | `public string BadgeText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `MembersList` | `public MBBindingList<MPLobbyClanMemberItemVM> MembersList { get; set; }` |
| `MemberActionsList` | `public MBBindingList<StringPairItemWithActionVM> MemberActionsList { get; set; }` |
| `PromoteToClanOfficerHint` | `public HintViewModel PromoteToClanOfficerHint { get; set; }` |

## Key Methods

### Compare
`public int Compare(MPLobbyClanMemberItemVM x, MPLobbyClanMemberItemVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshClanInformation
`public void RefreshClanInformation(ClanHomeInfo info)`

**Purpose:** Refreshes the display or cache of `clan information`.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Called when the `player name updated` event is raised.

## Usage Example

```csharp
var value = new MPLobbyClanRosterVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)