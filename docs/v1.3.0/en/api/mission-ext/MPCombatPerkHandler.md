<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPCombatPerkHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPCombatPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPCombatPerkHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPCombatPerkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MPCombatPerkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MPCombatPerkHandler());
```

## See Also

- [Complete Class Catalog](../catalog)