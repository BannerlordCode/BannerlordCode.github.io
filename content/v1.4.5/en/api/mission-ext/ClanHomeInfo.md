---
title: "ClanHomeInfo"
description: "Auto-generated class reference for ClanHomeInfo."
---
# ClanHomeInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanHomeInfo`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs`

## Overview

`ClanHomeInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInClan` | `public bool IsInClan { get; }` |
| `CanCreateClan` | `public bool CanCreateClan { get; }` |
| `ClanInfo` | `public ClanInfo ClanInfo { get; }` |
| `NotEnoughPlayersInfo` | `public NotEnoughPlayersInfo NotEnoughPlayersInfo { get; }` |
| `PlayerNotEligibleInfos` | `public PlayerNotEligibleInfo PlayerNotEligibleInfos { get; }` |
| `ClanPlayerInfos` | `public ClanPlayerInfo ClanPlayerInfos { get; }` |

## Key Methods

### CreateInClanInfo
`public static ClanHomeInfo CreateInClanInfo(ClanInfo clanInfo, ClanPlayerInfo clanPlayerInfos)`

**Purpose:** Constructs a new in clan info entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanHomeInfo.CreateInClanInfo(clanInfo, clanPlayerInfos);
```

### CreateCanCreateClanInfo
`public static ClanHomeInfo CreateCanCreateClanInfo()`

**Purpose:** Constructs a new can create clan info entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanHomeInfo.CreateCanCreateClanInfo();
```

### CreateCantCreateClanInfo
`public static ClanHomeInfo CreateCantCreateClanInfo(NotEnoughPlayersInfo notEnoughPlayersInfo, PlayerNotEligibleInfo playerNotEligibleInfos)`

**Purpose:** Constructs a new cant create clan info entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanHomeInfo.CreateCantCreateClanInfo(notEnoughPlayersInfo, playerNotEligibleInfos);
```

### CreateInvalidStateClanInfo
`public static ClanHomeInfo CreateInvalidStateClanInfo()`

**Purpose:** Constructs a new invalid state clan info entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanHomeInfo.CreateInvalidStateClanInfo();
```

## Usage Example

```csharp
ClanHomeInfo.CreateInClanInfo(clanInfo, clanPlayerInfos);
```

## See Also

- [Area Index](../)