<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageBoxTypeFlag`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageBoxTypeFlag

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum MessageBoxTypeFlag`
**Area:** engine

## Overview

`MessageBoxTypeFlag` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Ok` |
| `1` |
| `Warning` |
| `2` |
| `Error` |
| `4` |
| `OkCancel` |
| `8` |
| `RetryCancel` |
| `16` |
| `YesNo` |
| `32` |
| `YesNoCancel` |
| `64` |
| `Information` |
| `128` |
| `Exclamation` |
| `256` |
| `Question` |
| `512` |
| `AssertFailed` |

## Usage Example

```csharp
MessageBoxTypeFlag example = MessageBoxTypeFlag.Ok;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
