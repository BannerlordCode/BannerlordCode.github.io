---
title: "IObjectResolver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IObjectResolver`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IObjectResolver

**Namespace:** TaleWorlds.SaveSystem.Resolvers
**Module:** TaleWorlds.SaveSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Resolvers/IObjectResolver.cs`

## Overview

`IObjectResolver` lives in `TaleWorlds.SaveSystem.Resolvers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Resolvers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IObjectResolver implementation = GetObjectResolverImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)