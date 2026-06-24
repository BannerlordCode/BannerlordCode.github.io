<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameManagerComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameManagerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameManagerComponent.cs`

## Overview

`GameManagerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `GameManagerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameManager` | `public GameManagerBase GameManager { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomGameManagerComponent();
```

## See Also

- [Complete Class Catalog](../catalog)