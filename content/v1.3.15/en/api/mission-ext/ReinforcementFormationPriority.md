---
title: "ReinforcementFormationPriority"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReinforcementFormationPriority`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReinforcementFormationPriority

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ReinforcementFormationPriority`
**Area:** mission-ext

## Overview

`ReinforcementFormationPriority` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Dominant` |
| `6` |
| `Common` |
| `5` |
| `EmptyRepresentativeMatch` |
| `4` |
| `EmptyNoMatch` |
| `3` |
| `AlternativeDominant` |
| `2` |
| `AlternativeCommon` |
| `1` |
| `Default` |

## Usage Example

```csharp
ReinforcementFormationPriority example = ReinforcementFormationPriority.Dominant;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
