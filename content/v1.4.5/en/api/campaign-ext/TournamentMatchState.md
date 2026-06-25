---
title: "TournamentMatchState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMatchState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMatchState

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public enum TournamentMatchState`
**Area:** campaign-ext

## Overview

`TournamentMatchState` lives in `SandBox.ViewModelCollection.Tournament`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Unfinished` |
| `Current` |
| `Over` |

## Usage Example

```csharp
TournamentMatchState example = TournamentMatchState.Unfinished;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
