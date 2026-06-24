<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewsTypes`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NewsTypes

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public enum NewsTypes`
**Area:** core-extra

## Overview

`NewsTypes` lives in `TaleWorlds.Library.NewsManager`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library.NewsManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `LauncherSingleplayer` |
| `LauncherMultiplayer` |

## Usage Example

```csharp
NewsTypes example = NewsTypes.LauncherSingleplayer;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
