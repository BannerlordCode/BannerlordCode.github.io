---
title: "IInteractionInterfaceHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IInteractionInterfaceHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IInteractionInterfaceHandler

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/IInteractionInterfaceHandler.cs`

## Overview

`IInteractionInterfaceHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IInteractionInterfaceHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IInteractionInterfaceHandler implementation = GetInteractionInterfaceHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)