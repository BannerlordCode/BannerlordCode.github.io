---
title: "SaddleComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaddleComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaddleComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SaddleComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/SaddleComponent.cs`

## Overview

`SaddleComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SaddleComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** Gets the current value of `copy`.

## Usage Example

```csharp
var component = agent.GetComponent<SaddleComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)