---
title: "BorderFlagEntityFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BorderFlagEntityFactory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BorderFlagEntityFactory

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BorderFlagEntityFactory : IEntityFactory`
**Base:** `IEntityFactory`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BorderFlagEntityFactory.cs`

## Overview

`BorderFlagEntityFactory` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MakeEntity
`public GameEntity MakeEntity(params object paramObjects)`

**Purpose:** Handles logic related to `make entity`.

## Usage Example

```csharp
var value = new BorderFlagEntityFactory();
value.MakeEntity(paramObjects);
```

## See Also

- [Complete Class Catalog](../catalog)