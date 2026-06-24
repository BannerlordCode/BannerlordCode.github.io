<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TutorialState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/TutorialState.cs`

## Overview

`TutorialState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; }` |

## Usage Example

```csharp
var value = new TutorialState();
```

## See Also

- [Complete Class Catalog](../catalog)