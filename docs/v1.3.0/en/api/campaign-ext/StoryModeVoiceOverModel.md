<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeVoiceOverModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `sound path for character`.

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** Gets the current value of `accent class`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeVoiceOverModel>(new MyStoryModeVoiceOverModel());
```

## See Also

- [Complete Class Catalog](../catalog)