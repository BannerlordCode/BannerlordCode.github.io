<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OnEncyclopediaSearchActivatedEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OnEncyclopediaSearchActivatedEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OnEncyclopediaSearchActivatedEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia/OnEncyclopediaSearchActivatedEvent.cs`

## Overview

`OnEncyclopediaSearchActivatedEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new OnEncyclopediaSearchActivatedEvent();
```

## See Also

- [Complete Class Catalog](../catalog)