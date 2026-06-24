<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectivePerformingType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ObjectivePerformingType

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public enum ObjectivePerformingType`
**Area:** campaign-ext

## Overview

`ObjectivePerformingType` lives in `StoryMode.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `ByLookDirection` |
| `ByMovement` |

## Usage Example

```csharp
ObjectivePerformingType example = ObjectivePerformingType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
