<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ITexture`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ITexture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ITexture`
**Area:** campaign-ext

## Overview

`ITexture` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ITexture implementation = GetTextureImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
