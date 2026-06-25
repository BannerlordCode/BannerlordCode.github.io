---
title: "TotalEventData"
description: "Auto-generated class reference for TotalEventData."
---
# TotalEventData

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TotalEventData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## Overview

`TotalEventData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TotalEventData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasData` | `public bool HasData { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of TotalEventData from the subsystem API first
TotalEventData totalEventData = ...;
var result = totalEventData.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of TotalEventData from the subsystem API first
TotalEventData totalEventData = ...;
var result = totalEventData.GetHashCode();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TotalEventData entry = ...;
```

## See Also

- [Area Index](../)