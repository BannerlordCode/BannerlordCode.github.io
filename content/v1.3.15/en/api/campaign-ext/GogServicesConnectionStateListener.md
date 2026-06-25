---
title: "GogServicesConnectionStateListener"
description: "Auto-generated class reference for GogServicesConnectionStateListener."
---
# GogServicesConnectionStateListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GogServicesConnectionStateListener : GlobalGogServicesConnectionStateListener`
**Base:** `GlobalGogServicesConnectionStateListener`
**File:** `TaleWorlds.PlatformService.GOG/GogServicesConnectionStateListener.cs`

## Overview

`GogServicesConnectionStateListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnConnectionStateChange
`public override void OnConnectionStateChange(GogServicesConnectionState connected)`

**Purpose:** **Purpose:** Invoked when the connection state change event is raised.

```csharp
// Obtain an instance of GogServicesConnectionStateListener from the subsystem API first
GogServicesConnectionStateListener gogServicesConnectionStateListener = ...;
gogServicesConnectionStateListener.OnConnectionStateChange(connected);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GogServicesConnectionStateListener gogServicesConnectionStateListener = ...;
gogServicesConnectionStateListener.OnConnectionStateChange(connected);
```

## See Also

- [Area Index](../)