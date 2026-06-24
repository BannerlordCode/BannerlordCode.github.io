<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentPlayerState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentPlayerState

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public enum TournamentPlayerState`
**Area:** campaign-ext

## Overview

`TournamentPlayerState` lives in `SandBox.ViewModelCollection.Tournament`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `EmptyPlayer` |
| `GenericPlayer` |

## Usage Example

```csharp
TournamentPlayerState example = TournamentPlayerState.EmptyPlayer;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
