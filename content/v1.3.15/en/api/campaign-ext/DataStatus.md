---
title: "DataStatus"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DataStatus`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DataStatus

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public enum DataStatus`
**Area:** campaign-ext

## Overview

`DataStatus` lives in `TaleWorlds.PlayerServices.Avatar`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NotReady` |
| `Ready` |

## Usage Example

```csharp
DataStatus example = DataStatus.NotReady;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
