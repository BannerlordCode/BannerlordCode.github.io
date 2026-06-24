<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `POIType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# POIType

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public enum POIType`
**Area:** campaign-ext

## Overview

`POIType` lives in `SandBox.ViewModelCollection.MapSiege`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `WallSection` |
| `DefenderSiegeMachine` |
| `AttackerRamSiegeMachine` |
| `AttackerTowerSiegeMachine` |

## Usage Example

```csharp
POIType example = POIType.WallSection;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
