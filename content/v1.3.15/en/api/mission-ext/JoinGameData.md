---
title: "JoinGameData"
description: "Auto-generated class reference for JoinGameData."
---
# JoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class JoinGameData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/JoinGameData.cs`

## Overview

`JoinGameData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `JoinGameData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameServerProperties` | `public GameServerProperties GameServerProperties { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `SessionKey` | `public int SessionKey { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
JoinGameData entry = ...;
```

## See Also

- [Area Index](../)