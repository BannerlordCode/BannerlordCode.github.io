---
title: "LoadError"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadError`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadError

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadError`
**Area:** save-system

## Overview

`LoadError` lives in `TaleWorlds.SaveSystem.Load`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Load` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; }` |

## Usage Example

```csharp
var value = new LoadError();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
