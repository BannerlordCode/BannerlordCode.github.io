---
title: "CampaignMapSiegePrefabEntityCache"
description: "Auto-generated class reference for CampaignMapSiegePrefabEntityCache."
---
# CampaignMapSiegePrefabEntityCache

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMapSiegePrefabEntityCache : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.SandBox/SandBox/Sandbox/CampaignMapSiegePrefabEntityCache.cs`

## Overview

`CampaignMapSiegePrefabEntityCache` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetLaunchEntitialFrameForSiegeEngine
`public MatrixFrame GetLaunchEntitialFrameForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the launch entitial frame for siege engine value held by the this instance.

```csharp
// Obtain an instance of CampaignMapSiegePrefabEntityCache from the subsystem API first
CampaignMapSiegePrefabEntityCache campaignMapSiegePrefabEntityCache = ...;
var result = campaignMapSiegePrefabEntityCache.GetLaunchEntitialFrameForSiegeEngine(type, side);
```

### GetScaleForSiegeEngine
`public Vec3 GetScaleForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the scale for siege engine value held by the this instance.

```csharp
// Obtain an instance of CampaignMapSiegePrefabEntityCache from the subsystem API first
CampaignMapSiegePrefabEntityCache campaignMapSiegePrefabEntityCache = ...;
var result = campaignMapSiegePrefabEntityCache.GetScaleForSiegeEngine(type, side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignMapSiegePrefabEntityCache campaignMapSiegePrefabEntityCache = ...;
campaignMapSiegePrefabEntityCache.GetLaunchEntitialFrameForSiegeEngine(type, side);
```

## See Also

- [Area Index](../)