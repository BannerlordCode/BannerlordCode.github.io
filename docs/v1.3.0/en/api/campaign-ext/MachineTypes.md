<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MachineTypes`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MachineTypes

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public enum MachineTypes`
**Area:** campaign-ext

## Overview

`MachineTypes` lives in `SandBox.ViewModelCollection.MapSiege`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `Wall` |
| `BrokenWall` |
| `Ballista` |
| `Trebuchet` |
| `Ladder` |
| `Ram` |
| `SiegeTower` |

## Usage Example

```csharp
MachineTypes example = MachineTypes.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
