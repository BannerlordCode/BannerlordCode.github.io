---
title: "TauntSlotData"
description: "Auto-generated class reference for TauntSlotData."
---
# TauntSlotData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/TauntSlotData.cs`

## Overview

`TauntSlotData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TauntSlotData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `TauntIndices` | `public List<TauntIndexData> TauntIndices { get; set; }` |

## Key Methods

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**Purpose:** **Purpose:** Determines whether the this instance already holds same content with.

```csharp
// Obtain an instance of TauntSlotData from the subsystem API first
TauntSlotData tauntSlotData = ...;
var result = tauntSlotData.HasSameContentWith(other);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TauntSlotData entry = ...;
```

## See Also

- [Area Index](../)