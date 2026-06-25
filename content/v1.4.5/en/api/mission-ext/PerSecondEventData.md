---
title: "PerSecondEventData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerSecondEventData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerSecondEventData

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerSecondEventData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network/DebugNetworkEventStatistics.cs`

## Overview

`PerSecondEventData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PerSecondEventData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new PerSecondEventData();
```

## See Also

- [Complete Class Catalog](../catalog)