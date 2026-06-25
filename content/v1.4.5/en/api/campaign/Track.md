---
title: "Track"
description: "Auto-generated class reference for Track."
---
# Track

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Track : ILocatable<Track>, IInteractablePoint`
**Base:** `ILocatable<Track>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Track.cs`

## Overview

`Track` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDetected` | `public bool IsDetected { get; set; }` |
| `IsPointer` | `public bool IsPointer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |

## Key Methods

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**Purpose:** Checks whether the current object meets the preconditions for `party interact`.

```csharp
// Obtain an instance of Track from the subsystem API first
Track track = ...;
var result = track.CanPartyInteract(mobileParty, 0);
```

### GetPartyTypeEnum
`public static PartyTypeEnum GetPartyTypeEnum(MobileParty party)`

**Purpose:** Reads and returns the `party type enum` value held by the current object.

```csharp
// Static call; no instance required
Track.GetPartyTypeEnum(party);
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of Track from the subsystem API first
Track track = ...;
track.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Track track = ...;
track.CanPartyInteract(mobileParty, 0);
```

## See Also

- [Area Index](../)