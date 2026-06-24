<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MouseObjectives`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MouseObjectives

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public enum MouseObjectives`
**Area:** campaign-ext

## Overview

`MouseObjectives` lives in `StoryMode.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `AttackLeft` |
| `AttackRight` |
| `AttackUp` |
| `AttackDown` |
| `DefendLeft` |
| `DefendRight` |
| `DefendUp` |

## Usage Example

```csharp
MouseObjectives example = MouseObjectives.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
