<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyState : PlayerGameState`
**Base:** `PlayerGameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/PartyState.cs`

## Overview

`PartyState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; set; }` |
| `PartyScreenMode` | `public PartyScreenHelper.PartyScreenMode PartyScreenMode { get; set; }` |
| `IsDonating` | `public bool IsDonating { get; set; }` |
| `Handler` | `public IPartyScreenLogicHandler Handler { get; set; }` |

## Key Methods

### RequestUserInput
`public void RequestUserInput(string text, Action accept, Action cancel)`

**Purpose:** Handles logic related to `request user input`.

## Usage Example

```csharp
var value = new PartyState();
value.RequestUserInput("example", accept, cancel);
```

## See Also

- [Complete Class Catalog](../catalog)