<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanHomeInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanHomeInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanHomeInfo`
**Area:** mission-ext

## Overview

`ClanHomeInfo` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
ClanHomeInfo.CreateInClanInfo(clanInfo, clanPlayerInfos);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
