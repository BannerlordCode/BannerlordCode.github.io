---
title: "PerSecondEventData"
description: "Auto-generated class reference for PerSecondEventData."
---
# PerSecondEventData

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerSecondEventData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## Overview

`PerSecondEventData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PerSecondEventData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PerSecondEventData entry = ...;
```

## See Also

- [Area Index](../)