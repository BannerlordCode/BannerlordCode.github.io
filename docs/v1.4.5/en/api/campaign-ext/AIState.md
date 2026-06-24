<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AIState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AIState

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public enum AIState`
**Area:** campaign-ext

## Overview

`AIState` lives in `SandBox.BoardGames.AI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NeedsToRun` |
| `ReadyToRun` |
| `Running` |
| `AbortRequested` |
| `Aborted` |

## Usage Example

```csharp
AIState example = AIState.NeedsToRun;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
