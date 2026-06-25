---
title: "ConfigQuality"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConfigQuality`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConfigQuality

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public enum ConfigQuality`
**Area:** engine

## Overview

`ConfigQuality` lives in `TaleWorlds.Engine.Options`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `GFXVeryLow` |
| `GFXLow` |
| `GFXMedium` |
| `GFXHigh` |
| `GFXVeryHigh` |

## Usage Example

```csharp
ConfigQuality example = ConfigQuality.GFXVeryLow;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
