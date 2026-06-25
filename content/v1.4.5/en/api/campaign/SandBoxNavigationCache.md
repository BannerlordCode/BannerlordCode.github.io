---
title: "SandBoxNavigationCache"
description: "Auto-generated class reference for SandBoxNavigationCache."
---
# SandBoxNavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>, MapDistanceModel.INavigationCache`
**Base:** `NavigationCache<Settlement>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map.DistanceCache/SandBoxNavigationCache.cs`

## Overview

`SandBoxNavigationCache` lives in `TaleWorlds.CampaignSystem.Map.DistanceCache` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map.DistanceCache` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSceneXmlCrcValues
`public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**Purpose:** **Purpose:** Reads and returns the scene xml crc values value held by the this instance.

```csharp
// Obtain an instance of SandBoxNavigationCache from the subsystem API first
SandBoxNavigationCache sandBoxNavigationCache = ...;
sandBoxNavigationCache.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

### FinalizeInitialization
`public void FinalizeInitialization()`

**Purpose:** **Purpose:** Executes the FinalizeInitialization logic.

```csharp
// Obtain an instance of SandBoxNavigationCache from the subsystem API first
SandBoxNavigationCache sandBoxNavigationCache = ...;
sandBoxNavigationCache.FinalizeInitialization();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandBoxNavigationCache sandBoxNavigationCache = ...;
sandBoxNavigationCache.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

## See Also

- [Area Index](../)