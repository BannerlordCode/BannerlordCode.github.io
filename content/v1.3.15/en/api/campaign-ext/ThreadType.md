---
title: "ThreadType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThreadType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThreadType

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public enum ThreadType`
**Area:** campaign-ext

## Overview

`ThreadType` lives in `TaleWorlds.Network`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Single` |
| `MultipleIOAndListener` |

## Usage Example

```csharp
ThreadType example = ThreadType.Single;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
