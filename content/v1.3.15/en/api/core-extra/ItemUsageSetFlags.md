---
title: "ItemUsageSetFlags"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemUsageSetFlags`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemUsageSetFlags

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum ItemUsageSetFlags`
**Area:** core-extra

## Overview

`ItemUsageSetFlags` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `RequiresMount` |
| `1` |
| `RequiresNoMount` |
| `RequiresShield` |
| `4` |
| `RequiresNoShield` |
| `8` |
| `PassiveUsage` |

## Usage Example

```csharp
ItemUsageSetFlags example = ItemUsageSetFlags.RequiresMount;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
