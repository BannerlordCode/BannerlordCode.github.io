---
title: "ISavedStruct"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISavedStruct`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ISavedStruct

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public interface ISavedStruct`
**Area:** save-system

## Overview

`ISavedStruct` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ISavedStruct implementation = GetSavedStructImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
