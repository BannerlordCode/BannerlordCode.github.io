<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CameraFadeState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CameraFadeState

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public enum CameraFadeState`
**Area:** mission-ext

## Overview

`CameraFadeState` lives in `SandBox.View.Map`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `White` |
| `FadingOut` |
| `Black` |

## Usage Example

```csharp
CameraFadeState example = CameraFadeState.White;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
