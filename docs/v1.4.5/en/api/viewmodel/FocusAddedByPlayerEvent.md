<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FocusAddedByPlayerEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FocusAddedByPlayerEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FocusAddedByPlayerEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/FocusAddedByPlayerEvent.cs`

## Overview

`FocusAddedByPlayerEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AddedPlayer` | `public Hero AddedPlayer { get; }` |
| `AddedSkill` | `public SkillObject AddedSkill { get; }` |

## Usage Example

```csharp
var example = new FocusAddedByPlayerEvent();
```

## See Also

- [Complete Class Catalog](../catalog)