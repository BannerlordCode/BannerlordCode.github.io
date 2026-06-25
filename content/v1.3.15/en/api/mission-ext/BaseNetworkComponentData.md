---
title: "BaseNetworkComponentData"
description: "Auto-generated class reference for BaseNetworkComponentData."
---
# BaseNetworkComponentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## Overview

`BaseNetworkComponentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BaseNetworkComponentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentBattleIndex` | `public int CurrentBattleIndex { get; }` |

## Key Methods

### UpdateCurrentBattleIndex
`public void UpdateCurrentBattleIndex(int currentBattleIndex)`

**Purpose:** Recalculates and stores the latest representation of `current battle index`.

```csharp
// Obtain an instance of BaseNetworkComponentData from the subsystem API first
BaseNetworkComponentData baseNetworkComponentData = ...;
baseNetworkComponentData.UpdateCurrentBattleIndex(0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BaseNetworkComponentData entry = ...;
```

## See Also

- [Area Index](../)