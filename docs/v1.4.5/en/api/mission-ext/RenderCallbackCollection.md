<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RenderCallbackCollection`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RenderCallbackCollection

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct RenderCallbackCollection`
**Area:** mission-ext

## Overview

`RenderCallbackCollection` lives in `TaleWorlds.MountAndBlade.View.Tableaus`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SetActions` | `public List<Action<Texture>> SetActions { get; }` |
| `CancelActions` | `public List<Action> CancelActions { get; }` |

## Key Methods

### CreateEmpty
`public static RenderCallbackCollection CreateEmpty()`

**Purpose:** Creates a new `empty` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
RenderCallbackCollection.CreateEmpty();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
