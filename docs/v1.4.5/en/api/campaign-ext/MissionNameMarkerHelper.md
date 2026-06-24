<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNameMarkerHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerHelper

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public static class MissionNameMarkerHelper`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerHelper.cs`

## Overview

`MissionNameMarkerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionNameMarkerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
MissionNameMarkerHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)