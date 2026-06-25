---
title: "AccompanyingCharacter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AccompanyingCharacter`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AccompanyingCharacter

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AccompanyingCharacter`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/AccompanyingCharacter.cs`

## Overview

`AccompanyingCharacter` lives in `TaleWorlds.CampaignSystem.Settlements.Locations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Locations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFollowingPlayerAtMissionStart` | `public bool IsFollowingPlayerAtMissionStart { get; }` |

## Key Methods

### CanEnterLocation
`public bool CanEnterLocation(Location location)`

**Purpose:** Checks whether the current object can `enter location`.

### AllowEntranceToLocations
`public void AllowEntranceToLocations(Func<Location, bool> predicate)`

**Purpose:** Handles logic related to `allow entrance to locations`.

### DisallowEntranceToLocations
`public void DisallowEntranceToLocations(Func<Location, bool> predicate)`

**Purpose:** Handles logic related to `disallow entrance to locations`.

### AllowEntranceToAllLocations
`public void AllowEntranceToAllLocations()`

**Purpose:** Handles logic related to `allow entrance to all locations`.

### DisallowEntranceToAllLocations
`public void DisallowEntranceToAllLocations()`

**Purpose:** Handles logic related to `disallow entrance to all locations`.

## Usage Example

```csharp
var value = new AccompanyingCharacter();
value.CanEnterLocation(location);
```

## See Also

- [Complete Class Catalog](../catalog)