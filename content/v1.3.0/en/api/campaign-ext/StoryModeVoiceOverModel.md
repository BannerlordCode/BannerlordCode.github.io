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

`StoryModeVoiceOverModel` resolves the audio file a character speaks from, and it hand-builds the path for exactly two characters. A null `VoiceObject` returns an empty string outright (StoryMode/GameComponents/StoryModeVoiceOverModel.cs:19`). During the tutorial, the village headman takes the first of the voice object's paths with `$PLATFORM` replaced by `PC` and `.ogg` appended (`:24`, `:26`, `:27`). After the tutorial the Elder Brother is handled instead: the model searches the voice paths for one containing the character's string id plus `_female` or `_male` depending on `CharacterObject.PlayerCharacter.IsFemale` (`:33`, `:34`), falls back to the gender-agnostic `id_` match, and returns an empty string when neither matched (`:47`). Everyone else is delegated to the sandbox model (`:31`).

## Mental Model

The contract is a filesystem path, not a voice id, and the model owns the `.ogg` suffix and the `$PLATFORM` substitution — which means a mod replacing this model must produce a path the sound engine can open, and a path without the platform substitution resolves to a file that does not exist. `ConversationManager.cs:174` is the single consumer and it uses the return value directly as the sound path for the current speaker. Two behaviours are worth knowing before overriding. The Elder Brother's audio is keyed off the *player's* gender rather than his own (`:34`), so the same conversation plays a different file depending on who the player is. And the empty-string returns are deliberate but asymmetric: the null-voice case returns early (`:19`), whereas the Elder Brother case falls through to a return of the empty local (`:48`) after the search fails — so a missing voice degrades to silence rather than falling back to the sandbox path.

## Key Methods

### GetSoundPathForCharacter
`public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**Purpose:** Reads and returns the sound path for character value held by this instance.

```csharp
StoryModeVoiceOverModel storyModeVoiceOverModel = ...;
var result = storyModeVoiceOverModel.GetSoundPathForCharacter(character, voiceObject);
```

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** Reads and returns the accent class value held by this instance.

```csharp
StoryModeVoiceOverModel storyModeVoiceOverModel = ...;
var result = storyModeVoiceOverModel.GetAccentClass(culture, false);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<VoiceOverModel>(new StoryModeVoiceOverModel());
}
```

`VoiceOverModel` is declared as `MBGameModel<VoiceOverModel>` (`VoiceOverModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:106`.

## See Also

- [Area Index](../)