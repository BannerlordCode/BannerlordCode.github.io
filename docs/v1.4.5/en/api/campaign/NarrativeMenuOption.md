<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenuOption`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenuOption

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenuOption`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuOption.cs`

## Overview

`NarrativeMenuOption` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCondition
`public bool OnCondition(CharacterCreationManager characterCreationManager)`

**Purpose:** Called when the `condition` event is raised.

### OnSelect
`public void OnSelect(CharacterCreationManager characterCreationManager)`

**Purpose:** Called when the `select` event is raised.

### OnConsequence
`public void OnConsequence(CharacterCreationManager characterCreationManager)`

**Purpose:** Called when the `consequence` event is raised.

### SetOnCondition
`public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)`

**Purpose:** Sets the value or state of `on condition`.

### SetOnSelect
`public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)`

**Purpose:** Sets the value or state of `on select`.

### SetOnConsequence
`public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)`

**Purpose:** Sets the value or state of `on consequence`.

### ApplyFinalEffects
`public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)`

**Purpose:** Applies `final effects` to the current object.

## Usage Example

```csharp
var value = new NarrativeMenuOption();
value.OnCondition(characterCreationManager);
```

## See Also

- [Complete Class Catalog](../catalog)