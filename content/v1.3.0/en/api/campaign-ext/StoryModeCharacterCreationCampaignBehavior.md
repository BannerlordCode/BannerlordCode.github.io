---
title: "StoryModeCharacterCreationCampaignBehavior"
description: "Auto-generated class reference for StoryModeCharacterCreationCampaignBehavior."
---
# StoryModeCharacterCreationCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`

## Overview

`StoryModeCharacterCreationCampaignBehavior` lives in `StoryMode.GameComponents.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GameComponents.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of StoryModeCharacterCreationCampaignBehavior from the subsystem API first
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of StoryModeCharacterCreationCampaignBehavior from the subsystem API first
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.SyncData(dataStore);
```

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**Purpose:** Prepares the resources, state, or bindings required by `character creation stages`.

```csharp
// Obtain an instance of StoryModeCharacterCreationCampaignBehavior from the subsystem API first
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.InitializeCharacterCreationStages(characterCreationManager);
```

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**Purpose:** Prepares the resources, state, or bindings required by `data`.

```csharp
// Obtain an instance of StoryModeCharacterCreationCampaignBehavior from the subsystem API first
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.InitializeData(characterCreationManager);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)