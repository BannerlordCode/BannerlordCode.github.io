---
title: "MBTextureType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBTextureType`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBTextureType

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum MBTextureType`
**Area:** engine

## Overview

`MBTextureType` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `DiffuseMap` |
| `DiffuseMap2` |
| `BumpMap` |
| `EnvironmentMap` |

## Usage Example

```csharp
MBTextureType example = MBTextureType.DiffuseMap;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
