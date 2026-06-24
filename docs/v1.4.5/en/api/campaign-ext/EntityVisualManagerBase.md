<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EntityVisualManagerBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EntityVisualManagerBase

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public abstract class EntityVisualManagerBase : CampaignEntityVisualComponent`
**Base:** `CampaignEntityVisualComponent`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/EntityVisualManagerBase.cs`

## Overview

`EntityVisualManagerBase` lives in `SandBox.View.Map.Managers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Managers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapScene` | `public Scene MapScene { get; }` |

## Key Methods

### GetVisualOfEntity
`public abstract MapEntityVisual<TEntity> GetVisualOfEntity(TEntity entity)`

**Purpose:** Gets the current value of `visual of entity`.

### GetEntityVisualManagerBase
`public static EntityVisualManagerBase<TEntity> GetEntityVisualManagerBase()`

**Purpose:** Gets the current value of `entity visual manager base`.

## Usage Example

```csharp
var implementation = new CustomEntityVisualManagerBase();
```

## See Also

- [Complete Class Catalog](../catalog)