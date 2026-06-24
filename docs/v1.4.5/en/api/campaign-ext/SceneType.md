<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneType

**Namespace:** SandBox.View.Missions.SandBox
**Module:** SandBox.View
**Type:** `public enum SceneType`
**Area:** campaign-ext

## Overview

`SceneType` lives in `SandBox.View.Missions.SandBox`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Missions.SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Center` |
| `Shipyard` |
| `Tavern` |
| `VillageCenter` |
| `Arena` |
| `LordsHall` |
| `Castle` |
| `Dungeon` |
| `EmptyShop` |
| `All` |

## Usage Example

```csharp
SceneType example = SceneType.Center;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
