<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerMoveTroopEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerMoveTroopEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerMoveTroopEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PlayerMoveTroopEvent.cs`

## Overview

`PlayerMoveTroopEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Troop` | `public CharacterObject Troop { get; }` |
| `Amount` | `public int Amount { get; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; }` |
| `FromSide` | `public PartyScreenLogic.PartyRosterSide FromSide { get; }` |
| `ToSide` | `public PartyScreenLogic.PartyRosterSide ToSide { get; }` |

## Usage Example

```csharp
var example = new PlayerMoveTroopEvent();
```

## See Also

- [Complete Class Catalog](../catalog)