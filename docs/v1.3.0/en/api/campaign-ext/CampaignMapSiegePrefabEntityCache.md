<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignMapSiegePrefabEntityCache`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMapSiegePrefabEntityCache

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMapSiegePrefabEntityCache : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/CampaignMapSiegePrefabEntityCache.cs`

## Overview

`CampaignMapSiegePrefabEntityCache` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetLaunchEntitialFrameForSiegeEngine
`public MatrixFrame GetLaunchEntitialFrameForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Gets the current value of `launch entitial frame for siege engine`.

### GetScaleForSiegeEngine
`public Vec3 GetScaleForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Gets the current value of `scale for siege engine`.

## Usage Example

```csharp
var value = new CampaignMapSiegePrefabEntityCache();
value.GetLaunchEntitialFrameForSiegeEngine(type, side);
```

## See Also

- [Complete Class Catalog](../catalog)