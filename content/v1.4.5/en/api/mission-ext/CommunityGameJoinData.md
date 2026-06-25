---
title: "CommunityGameJoinData"
description: "Auto-generated class reference for CommunityGameJoinData."
---
# CommunityGameJoinData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommunityGameJoinData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CommunityGameJoinData.cs`

## Overview

`CommunityGameJoinData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CommunityGameJoinData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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