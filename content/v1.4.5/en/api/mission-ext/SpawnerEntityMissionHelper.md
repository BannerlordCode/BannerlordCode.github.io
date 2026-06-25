---
title: "SpawnerEntityMissionHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnerEntityMissionHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnerEntityMissionHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerEntityMissionHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnerEntityMissionHelper.cs`

## Overview

`SpawnerEntityMissionHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SpawnerEntityMissionHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
SpawnerEntityMissionHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)