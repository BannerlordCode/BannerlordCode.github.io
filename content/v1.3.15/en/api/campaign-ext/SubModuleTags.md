---
title: "SubModuleTags"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SubModuleTags`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SubModuleTags

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public enum SubModuleTags`
**Area:** campaign-ext

## Overview

`SubModuleTags` lives in `TaleWorlds.ModuleManager`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `RejectedPlatform` |
| `ExclusivePlatform` |
| `DedicatedServerType` |
| `IsNoRenderModeElement` |
| `DependantRuntimeLibrary` |
| `PlayerHostedDedicatedServer` |

## Usage Example

```csharp
SubModuleTags example = SubModuleTags.RejectedPlatform;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
