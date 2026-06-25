---
title: "ClanInfo"
description: "Auto-generated class reference for ClanInfo."
---
# ClanInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanInfo`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs`

## Overview

`ClanInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClanId` | `public Guid ClanId { get; }` |
| `Name` | `public string Name { get; }` |
| `Tag` | `public string Tag { get; }` |
| `Faction` | `public string Faction { get; }` |
| `Sigil` | `public string Sigil { get; }` |
| `InformationText` | `public string InformationText { get; }` |
| `Players` | `public ClanPlayer Players { get; }` |
| `Announcements` | `public ClanAnnouncement Announcements { get; }` |

## Key Methods

### CreateUnavailableClanInfo
`public static ClanInfo CreateUnavailableClanInfo()`

**Purpose:** Constructs a new `unavailable clan info` entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanInfo.CreateUnavailableClanInfo();
```

## Usage Example

```csharp
ClanInfo.CreateUnavailableClanInfo();
```

## See Also

- [Area Index](../)