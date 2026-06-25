---
title: "TotalEventData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TotalEventData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TotalEventData

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TotalEventData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network/DebugNetworkEventStatistics.cs`

## Overview

`TotalEventData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TotalEventData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new TotalEventData();
```

## See Also

- [Complete Class Catalog](../catalog)