---
title: "AnotherPlayerData"
description: "Auto-generated class reference for AnotherPlayerData."
---
# AnotherPlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnotherPlayerData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/AnotherPlayerData.cs`

## Overview

`AnotherPlayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AnotherPlayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerState` | `public AnotherPlayerState PlayerState { get; set; }` |
| `Experience` | `public int Experience { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AnotherPlayerData entry = ...;
```

## See Also

- [Area Index](../)