---
title: "StoryModeVoiceOverModel"
description: "Auto-generated class reference for StoryModeVoiceOverModel."
---
# StoryModeVoiceOverModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`
**File:** `StoryMode/GameComponents/StoryModeVoiceOverModel.cs`

## Overview

`StoryModeVoiceOverModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeVoiceOverModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSoundPathForCharacter
`public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**Purpose:** **Purpose:** Reads and returns the sound path for character value held by the this instance.

```csharp
// Obtain an instance of StoryModeVoiceOverModel from the subsystem API first
StoryModeVoiceOverModel storyModeVoiceOverModel = ...;
var result = storyModeVoiceOverModel.GetSoundPathForCharacter(character, voiceObject);
```

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** **Purpose:** Reads and returns the accent class value held by the this instance.

```csharp
// Obtain an instance of StoryModeVoiceOverModel from the subsystem API first
StoryModeVoiceOverModel storyModeVoiceOverModel = ...;
var result = storyModeVoiceOverModel.GetAccentClass(culture, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeVoiceOverModel>(new MyStoryModeVoiceOverModel());
```

## See Also

- [Area Index](../)