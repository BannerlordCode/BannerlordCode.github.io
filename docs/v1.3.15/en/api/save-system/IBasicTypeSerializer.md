<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IBasicTypeSerializer`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IBasicTypeSerializer

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public interface IBasicTypeSerializer`
**Area:** save-system

## Overview

`IBasicTypeSerializer` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IBasicTypeSerializer implementation = GetBasicTypeSerializerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
