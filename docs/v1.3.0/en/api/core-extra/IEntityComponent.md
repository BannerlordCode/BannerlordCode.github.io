<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IEntityComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IEntityComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Core/IEntityComponent.cs`

## Overview

`IEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IEntityComponent implementation = GetEntityComponentImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)