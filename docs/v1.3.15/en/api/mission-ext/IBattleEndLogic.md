<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IBattleEndLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IBattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IBattleEndLogic.cs`

## Overview

`IBattleEndLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IBattleEndLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IBattleEndLogic implementation = GetBattleEndLogicImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)