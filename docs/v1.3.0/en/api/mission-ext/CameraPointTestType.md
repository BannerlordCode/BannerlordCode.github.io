<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CameraPointTestType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CameraPointTestType

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CameraPointTestType`
**Area:** mission-ext

## Overview

`CameraPointTestType` lives in `TaleWorlds.MountAndBlade.View.Screens`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Final` |
| `Albedo` |
| `Normal` |
| `Specular` |
| `AO` |
| `OnlyAmbient` |

## Usage Example

```csharp
CameraPointTestType example = CameraPointTestType.Final;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
