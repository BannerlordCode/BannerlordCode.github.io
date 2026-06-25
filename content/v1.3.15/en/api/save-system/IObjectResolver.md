---
title: "IObjectResolver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IObjectResolver`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IObjectResolver

**Namespace:** TaleWorlds.SaveSystem.Resolvers
**Module:** TaleWorlds.SaveSystem
**Type:** `public interface IObjectResolver`
**Area:** save-system

## Overview

`IObjectResolver` lives in `TaleWorlds.SaveSystem.Resolvers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Resolvers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IObjectResolver implementation = GetObjectResolverImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
