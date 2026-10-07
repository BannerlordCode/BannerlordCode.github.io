---
title: "CommunityGameJoinData"
description: "Auto-generated class reference for CommunityGameJoinData."
---
# CommunityGameJoinData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommunityGameJoinData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CommunityGameJoinData.cs`

## Overview

`CommunityGameJoinData` is a 19-line plain data class with two public get/set properties and nothing else —
no constructor, no methods, no validation. `Name` is a `string` and `PlayerId` is a
`TaleWorlds.PlayerServices.PlayerId` (`CommunityGameJoinData.cs:12`, `CommunityGameJoinData.cs:17`).

It describes one participant in a community (peer-to-peer) game session: a display name and the platform
player identifier that goes with it. That pairing is the point — a name alone is not unique across a peer
session, and a `PlayerId` alone does not tell a human anything.

Nothing in the 1.3.15 C# tree constructs or reads this type: a search for the name outside its own
declaration returns no hits. The community layer that fills it in is behind the native player-services
boundary, so from managed code this is a shape you receive, not a subsystem you drive.

## Mental Model

Read it as a wire-format DTO, not as a live session object. The boundaries:

- **It has no identity beyond the two fields.** Two entries with the same `PlayerId` are indistinguishable,
  and two with the same `Name` are indistinguishable; nothing in the type deduplicates or compares.
- **Both properties are mutable and nothing validates them.** Setting `Name` to `null` or `PlayerId` to a
  default-constructed id succeeds silently. If the native side assumes non-null, the failure appears there
  and not here.
- **`PlayerId` is an external type.** It comes from `TaleWorlds.PlayerServices`, not from
  `TaleWorlds.MountAndBlade`, so you need that namespace referenced to touch the property at all — which is
  the clearest signal that this class exists to bridge into the player-services layer rather than to be part
  of campaign or mission state.
- **It is not a `MissionBehavior`, a game model, or a save type.** It is not registered with any model
  collection, not saved, and not resolvable from `MissionGameModels`.

## How to use

**Getting one.** Construct it yourself when you need to hand a pair to the community session API; there is no
factory and no static accessor in this version. Both properties are plain auto-properties with public
setters.

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.PlayerServices;

public class CommunityRosterEntry
{
    public CommunityRosterEntry(PlayerId id, string name)
    {
        // Both setters are plain auto-properties (CommunityGameJoinData.cs:12 / :17) - the type
        // validates nothing, so the caller owns both values.
        PlayerId = id;
        Name = name;
    }

    public PlayerId PlayerId { get; set; }
    public string Name { get; set; }

    public CommunityGameJoinData ToJoinData()
    {
        var data = new CommunityGameJoinData();
        data.PlayerId = PlayerId;
        data.Name = Name;
        Debug.Print("joining as " + data.Name);
        return data;
    }
}
```

**The mistake that bites.** Swapping the two fields when filling it in — assigning a display string to
`PlayerId` because the property name is unfamiliar. Both are public setters with no type checking at the
managed boundary beyond the compile-time type, so the mismatch shows up as a peer session that either
refuses to join or joins as an unidentifiable guest with no diagnostic pointing back at the assignment.



## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CommunityGameJoinData entry = ...;
```

## See Also

- [Area Index](../)
- [CustomGameBannedPlayerManager](../CustomGameBannedPlayerManager)
- [BattlePowerCalculationLogic](../BattlePowerCalculationLogic)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/CommunityGameJoinData)