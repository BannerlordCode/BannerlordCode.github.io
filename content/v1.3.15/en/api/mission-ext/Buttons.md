---
title: "Buttons"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Buttons`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Buttons

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum Buttons : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`Buttons` lives in `TaleWorlds.MountAndBlade.Launcher.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `OK` |
| `OKCancel` |
| `YesNo` |
| `4U` |
| `YesNoCancel` |

## Usage Example

```csharp
Buttons example = Buttons.OK;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
