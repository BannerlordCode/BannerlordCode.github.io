---
title: "GogServicesConnectionStateListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GogServicesConnectionStateListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GogServicesConnectionStateListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GogServicesConnectionStateListener : GlobalGogServicesConnectionStateListener`
**Base:** `GlobalGogServicesConnectionStateListener`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/GogServicesConnectionStateListener.cs`

## Overview

`GogServicesConnectionStateListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnConnectionStateChange
`public override void OnConnectionStateChange(GogServicesConnectionState connected)`

**Purpose:** Called when the `connection state change` event is raised.

## Usage Example

```csharp
var value = new GogServicesConnectionStateListener();
value.OnConnectionStateChange(connected);
```

## See Also

- [Complete Class Catalog](../catalog)