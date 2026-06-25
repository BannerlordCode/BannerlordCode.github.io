---
title: "MapSceneCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSceneCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSceneCreator

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MapSceneCreator : IMapSceneCreator`
**Base:** `IMapSceneCreator`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/MapSceneCreator.cs`

## Overview

`MapSceneCreator` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new MapSceneCreator();
```

## See Also

- [Complete Class Catalog](../catalog)