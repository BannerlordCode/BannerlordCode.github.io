---
title: "GameEntityComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntityComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class GameEntityComponent : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntityComponent.cs`

## Overview

`GameEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `GameEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEntity
`public WeakGameEntity GetEntity()`

**Purpose:** Gets the current value of `entity`.

### GetFirstMetaMesh
`public virtual MetaMesh GetFirstMetaMesh()`

**Purpose:** Gets the current value of `first meta mesh`.

## Usage Example

```csharp
var implementation = new CustomGameEntityComponent();
```

## See Also

- [Complete Class Catalog](../catalog)