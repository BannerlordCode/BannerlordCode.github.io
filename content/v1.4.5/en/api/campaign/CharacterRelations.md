---
title: "CharacterRelations"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterRelations`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterRelations

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum CharacterRelations`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationCharacter.cs`

## Overview

`CharacterRelations` lives in `TaleWorlds.CampaignSystem.Settlements.Locations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Locations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
CharacterRelations example = CharacterRelations.Value;
```

## See Also

- [Complete Class Catalog](../catalog)