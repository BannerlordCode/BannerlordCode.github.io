<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICameraModeLogic`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICameraModeLogic

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Core/ICameraModeLogic.cs`

## Overview

`ICameraModeLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ICameraModeLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICameraModeLogic implementation = GetCameraModeLogicImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)