<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutBattleEndState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutBattleEndState

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode.Quests
**Type:** `public enum HideoutBattleEndState`
**Area:** campaign-ext

## Overview

`HideoutBattleEndState` lives in `StoryMode.Quests.FirstPhase`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.Quests.FirstPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Retreated` |
| `Defeated` |

## Usage Example

```csharp
HideoutBattleEndState example = HideoutBattleEndState.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
