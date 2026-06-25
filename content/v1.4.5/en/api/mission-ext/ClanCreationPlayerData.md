---
title: "ClanCreationPlayerData"
description: "Auto-generated class reference for ClanCreationPlayerData."
---
# ClanCreationPlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanCreationPlayerData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanCreationPlayerData.cs`

## Overview

`ClanCreationPlayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ClanCreationPlayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerSessionId` | `public PlayerSessionId PlayerSessionId { get; }` |
| `ClanCreationAnswer` | `public ClanCreationAnswer ClanCreationAnswer { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ClanCreationPlayerData entry = ...;
```

## See Also

- [Area Index](../)