---
title: "TauntUsageFlag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntUsageFlag`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageFlag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class TauntUsageFlag`
**Area:** core-extra

## Overview

`TauntUsageFlag` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `RequiresBow` |
| `1` |
| `RequiresShield` |
| `2` |
| `IsLeftStance` |
| `4` |
| `RequiresOnFoot` |
| `8` |
| `UnsuitableForTwoHanded` |
| `16` |
| `UnsuitableForOneHanded` |
| `32` |
| `UnsuitableForShield` |
| `64` |
| `UnsuitableForBow` |
| `128` |
| `UnsuitableForCrossbow` |
| `256` |
| `UnsuitableForEmpty` |

## Usage Example

```csharp
var value = new TauntUsageFlag();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
