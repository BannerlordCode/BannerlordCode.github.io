---
title: "ClanPlayerInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPlayerInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPlayerInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPlayerInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanPlayerInfo.cs`

## Overview

`ClanPlayerInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `State` | `public AnotherPlayerState State { get; }` |
| `ActiveBadgeId` | `public string ActiveBadgeId { get; }` |

## Usage Example

```csharp
var value = new ClanPlayerInfo();
```

## See Also

- [Complete Class Catalog](../catalog)