---
title: "OptionsDataType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsDataType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsDataType

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum OptionsDataType`
**Area:** mission-ext

## Overview

`OptionsDataType` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `BooleanOption` |
| `NumericOption` |
| `MultipleSelectionOption` |
| `3` |
| `InputOption` |

## Usage Example

```csharp
OptionsDataType example = OptionsDataType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
