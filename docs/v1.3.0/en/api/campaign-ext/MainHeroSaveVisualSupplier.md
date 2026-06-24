<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainHeroSaveVisualSupplier`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MainHeroSaveVisualSupplier

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class MainHeroSaveVisualSupplier : IMainHeroVisualSupplier`
**Base:** `IMainHeroVisualSupplier`
**File:** `SandBox.View/MainHeroSaveVisualSupplier.cs`

## Overview

`MainHeroSaveVisualSupplier` lives in `SandBox.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new MainHeroSaveVisualSupplier();
```

## See Also

- [Complete Class Catalog](../catalog)