<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanRoleAssignedThroughClanScreenEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanRoleAssignedThroughClanScreenEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleAssignedThroughClanScreenEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleAssignedThroughClanScreenEvent.cs`

## Overview

`ClanRoleAssignedThroughClanScreenEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `HeroObject` | `public Hero HeroObject { get; }` |

## Usage Example

```csharp
var example = new ClanRoleAssignedThroughClanScreenEvent();
```

## See Also

- [Complete Class Catalog](../catalog)