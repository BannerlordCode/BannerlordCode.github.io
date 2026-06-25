---
title: "TauntIndexData"
description: "Auto-generated class reference for TauntIndexData."
---
# TauntIndexData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TauntIndexData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntIndexData.cs`

## Overview

`TauntIndexData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TauntIndexData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TauntId` | `public string TauntId { get; set; }` |
| `TauntIndex` | `public int TauntIndex { get; set; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of TauntIndexData from the subsystem API first
TauntIndexData tauntIndexData = ...;
var result = tauntIndexData.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of TauntIndexData from the subsystem API first
TauntIndexData tauntIndexData = ...;
var result = tauntIndexData.GetHashCode();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TauntIndexData entry = ...;
```

## See Also

- [Area Index](../)