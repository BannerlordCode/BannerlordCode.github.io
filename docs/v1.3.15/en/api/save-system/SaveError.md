<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveError`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveError

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveError`
**Area:** save-system

## Overview

`SaveError` lives in `TaleWorlds.SaveSystem.Save`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; }` |

## Usage Example

```csharp
var value = new SaveError();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
