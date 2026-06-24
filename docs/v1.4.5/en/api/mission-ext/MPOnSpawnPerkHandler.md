<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPOnSpawnPerkHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPOnSpawnPerkHandler`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPOnSpawnPerkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MPOnSpawnPerkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MPOnSpawnPerkHandler());
```

## See Also

- [Complete Class Catalog](../catalog)