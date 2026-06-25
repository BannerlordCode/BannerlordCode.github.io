---
title: "RelevantContextType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RelevantContextType`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RelevantContextType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum RelevantContextType`
**Area:** core-extra

## Overview

`RelevantContextType` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Any` |
| `MPLobby` |
| `CustomBattle` |
| `Mission` |

## Usage Example

```csharp
RelevantContextType example = RelevantContextType.Any;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
