<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveGameFileInfo`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveGameFileInfo

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveGameFileInfo`
**Area:** save-system

## Overview

`SaveGameFileInfo` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new SaveGameFileInfo();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
