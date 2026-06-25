---
title: "PlayerRequestUpgradeTroopEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerRequestUpgradeTroopEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerRequestUpgradeTroopEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerRequestUpgradeTroopEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs`

## Overview

`PlayerRequestUpgradeTroopEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceTroop` | `public CharacterObject SourceTroop { get; }` |
| `TargetTroop` | `public CharacterObject TargetTroop { get; }` |
| `Number` | `public int Number { get; }` |

## Usage Example

```csharp
var example = new PlayerRequestUpgradeTroopEvent();
```

## See Also

- [Complete Class Catalog](../catalog)