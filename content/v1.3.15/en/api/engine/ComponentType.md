---
title: "ComponentType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ComponentType`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ComponentType

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum ComponentType : uint`
**Base:** `uint`
**Area:** engine

## Overview

`ComponentType` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `MetaMesh` |
| `Light` |
| `CompositeComponent` |
| `ClothSimulator` |
| `ParticleSystemInstanced` |
| `TownIcon` |
| `CustomType1` |

## Usage Example

```csharp
ComponentType example = ComponentType.MetaMesh;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
