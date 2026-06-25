---
title: "MPLobbyClanRosterVM"
description: "Auto-generated class reference for MPLobbyClanRosterVM."
---
# MPLobbyClanRosterVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanRosterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanRosterVM.cs`

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

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyClanRosterVM from the subsystem API first
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
var result = mPLobbyClanRosterVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanRosterVM from the subsystem API first
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.RefreshValues();
```

### RefreshClanInformation
`public void RefreshClanInformation(ClanHomeInfo info)`

**Purpose:** Keeps the display or cache of clan information in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanRosterVM from the subsystem API first
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.RefreshClanInformation(info);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Invoked when the player name updated event is raised.

```csharp
// Obtain an instance of MPLobbyClanRosterVM from the subsystem API first
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.OnPlayerNameUpdated("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.Compare(x, y);
```

## See Also

- [Area Index](../)