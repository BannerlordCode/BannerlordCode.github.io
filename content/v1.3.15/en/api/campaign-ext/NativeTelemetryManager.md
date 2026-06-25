---
title: "NativeTelemetryManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeTelemetryManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeTelemetryManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class NativeTelemetryManager : ITelemetryManager`
**Base:** `ITelemetryManager`
**File:** `TaleWorlds.DotNet/NativeTelemetryManager.cs`

## Overview

`NativeTelemetryManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `NativeTelemetryManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TelemetryLevelMask` | `public static TelemetryLevelMask TelemetryLevelMask { get; }` |

## Key Methods

### GetTelemetryLevelMask
`public TelemetryLevelMask GetTelemetryLevelMask()`

**Purpose:** Gets the current value of `telemetry level mask`.

### StartTelemetryConnection
`public void StartTelemetryConnection(bool showErrors)`

**Purpose:** Handles logic related to `start telemetry connection`.

### StopTelemetryConnection
`public void StopTelemetryConnection()`

**Purpose:** Handles logic related to `stop telemetry connection`.

### BeginTelemetryScopeInternal
`public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)`

**Purpose:** Handles logic related to `begin telemetry scope internal`.

### EndTelemetryScopeInternal
`public void EndTelemetryScopeInternal()`

**Purpose:** Handles logic related to `end telemetry scope internal`.

### BeginTelemetryScopeBaseLevelInternal
`public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)`

**Purpose:** Handles logic related to `begin telemetry scope base level internal`.

### EndTelemetryScopeBaseLevelInternal
`public void EndTelemetryScopeBaseLevelInternal()`

**Purpose:** Handles logic related to `end telemetry scope base level internal`.

## Usage Example

```csharp
var manager = NativeTelemetryManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)