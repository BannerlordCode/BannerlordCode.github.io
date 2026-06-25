---
title: "NativeTelemetryManager"
description: "Auto-generated class reference for NativeTelemetryManager."
---
# NativeTelemetryManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class NativeTelemetryManager : ITelemetryManager`
**Base:** `ITelemetryManager`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeTelemetryManager.cs`

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

**Purpose:** **Purpose:** Reads and returns the telemetry level mask value held by the this instance.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
var result = nativeTelemetryManager.GetTelemetryLevelMask();
```

### StartTelemetryConnection
`public void StartTelemetryConnection(bool showErrors)`

**Purpose:** **Purpose:** Starts the telemetry connection flow or state machine.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.StartTelemetryConnection(false);
```

### StopTelemetryConnection
`public void StopTelemetryConnection()`

**Purpose:** **Purpose:** Stops the telemetry connection flow or state machine.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.StopTelemetryConnection();
```

### BeginTelemetryScopeInternal
`public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)`

**Purpose:** **Purpose:** Executes the BeginTelemetryScopeInternal logic.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.BeginTelemetryScopeInternal(levelMask, "example");
```

### EndTelemetryScopeInternal
`public void EndTelemetryScopeInternal()`

**Purpose:** **Purpose:** Executes the EndTelemetryScopeInternal logic.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.EndTelemetryScopeInternal();
```

### BeginTelemetryScopeBaseLevelInternal
`public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)`

**Purpose:** **Purpose:** Executes the BeginTelemetryScopeBaseLevelInternal logic.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.BeginTelemetryScopeBaseLevelInternal(levelMask, "example");
```

### EndTelemetryScopeBaseLevelInternal
`public void EndTelemetryScopeBaseLevelInternal()`

**Purpose:** **Purpose:** Executes the EndTelemetryScopeBaseLevelInternal logic.

```csharp
// Obtain an instance of NativeTelemetryManager from the subsystem API first
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.EndTelemetryScopeBaseLevelInternal();
```

## Usage Example

```csharp
var manager = NativeTelemetryManager.Current;
```

## See Also

- [Area Index](../)