<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveFolderExtension`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveFolderExtension

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public enum SaveFolderExtension : byte`
**Base:** `byte`
**Area:** save-system

## Overview

`SaveFolderExtension` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Root` |
| `Object` |
| `Struct` |
| `Container` |

## Usage Example

```csharp
SaveFolderExtension example = SaveFolderExtension.Root;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
