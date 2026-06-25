---
title: "AccompanyingCharacter"
description: "Auto-generated class reference for AccompanyingCharacter."
---
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

**Purpose:** Checks whether the current object meets the preconditions for `enter location`.

```csharp
// Obtain an instance of AccompanyingCharacter from the subsystem API first
AccompanyingCharacter accompanyingCharacter = ...;
var result = accompanyingCharacter.CanEnterLocation(location);
```

### AllowEntranceToLocations
`public void AllowEntranceToLocations(Func<Location, bool> predicate)`

**Purpose:** Permits `entrance to locations` to be enabled or performed on the current object.

```csharp
// Obtain an instance of AccompanyingCharacter from the subsystem API first
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.AllowEntranceToLocations(func<Location, false);
```

### DisallowEntranceToLocations
`public void DisallowEntranceToLocations(Func<Location, bool> predicate)`

**Purpose:** Prevents `entrance to locations` from being enabled or performed on the current object.

```csharp
// Obtain an instance of AccompanyingCharacter from the subsystem API first
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.DisallowEntranceToLocations(func<Location, false);
```

### AllowEntranceToAllLocations
`public void AllowEntranceToAllLocations()`

**Purpose:** Permits `entrance to all locations` to be enabled or performed on the current object.

```csharp
// Obtain an instance of AccompanyingCharacter from the subsystem API first
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.AllowEntranceToAllLocations();
```

### DisallowEntranceToAllLocations
`public void DisallowEntranceToAllLocations()`

**Purpose:** Prevents `entrance to all locations` from being enabled or performed on the current object.

```csharp
// Obtain an instance of AccompanyingCharacter from the subsystem API first
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.DisallowEntranceToAllLocations();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.CanEnterLocation(location);
```

## See Also

- [Area Index](../)