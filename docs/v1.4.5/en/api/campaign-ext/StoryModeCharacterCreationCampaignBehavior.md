<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeCharacterCreationCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCharacterCreationCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents.CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`

## Overview

`StoryModeCharacterCreationCampaignBehavior` lives in `StoryMode.GameComponents.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GameComponents.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**Purpose:** Initializes the state, resources, or bindings for `character creation stages`.

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**Purpose:** Initializes the state, resources, or bindings for `data`.

## Usage Example

```csharp
var value = new StoryModeCharacterCreationCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)