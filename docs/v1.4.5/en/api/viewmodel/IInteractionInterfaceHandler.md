<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IInteractionInterfaceHandler`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IInteractionInterfaceHandler

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/IInteractionInterfaceHandler.cs`

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