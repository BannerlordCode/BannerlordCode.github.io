<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxNavigationCache`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxNavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>, MapDistanceModel.INavigationCache`
**Base:** `NavigationCache<Settlement>`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs`

## Overview

`SandBoxNavigationCache` lives in `TaleWorlds.CampaignSystem.Map.DistanceCache` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map.DistanceCache` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSceneXmlCrcValues
`public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**Purpose:** Gets the current value of `scene xml crc values`.

### FinalizeInitialization
`public void FinalizeInitialization()`

**Purpose:** Handles logic related to `finalize initialization`.

## Usage Example

```csharp
var value = new SandBoxNavigationCache();
value.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

## See Also

- [Complete Class Catalog](../catalog)