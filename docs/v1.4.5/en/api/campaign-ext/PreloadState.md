<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PreloadState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PreloadState

**Namespace:** Sandbox.View.GameStates
**Module:** Sandbox.View
**Type:** `public class PreloadState : GameState`
**Base:** `GameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Sandbox.View.GameStates/PreloadState.cs`

## Overview

`PreloadState` lives in `Sandbox.View.GameStates` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Sandbox.View.GameStates` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new PreloadState();
```

## See Also

- [Complete Class Catalog](../catalog)