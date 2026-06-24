<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanHomeInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanHomeInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanHomeInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs`

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

**Purpose:** Creates a new `in clan info` instance or object.

### CreateCanCreateClanInfo
`public static ClanHomeInfo CreateCanCreateClanInfo()`

**Purpose:** Creates a new `can create clan info` instance or object.

### CreateCantCreateClanInfo
`public static ClanHomeInfo CreateCantCreateClanInfo(NotEnoughPlayersInfo notEnoughPlayersInfo, PlayerNotEligibleInfo playerNotEligibleInfos)`

**Purpose:** Creates a new `cant create clan info` instance or object.

### CreateInvalidStateClanInfo
`public static ClanHomeInfo CreateInvalidStateClanInfo()`

**Purpose:** Creates a new `invalid state clan info` instance or object.

## Usage Example

```csharp
ClanHomeInfo.CreateInClanInfo(clanInfo, clanPlayerInfos);
```

## See Also

- [Complete Class Catalog](../catalog)