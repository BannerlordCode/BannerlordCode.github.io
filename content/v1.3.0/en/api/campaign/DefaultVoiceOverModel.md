---
title: "DefaultVoiceOverModel"
description: "Auto-generated class reference for DefaultVoiceOverModel."
---
# DefaultVoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVoiceOverModel.cs`

## Overview

`DefaultVoiceOverModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVoiceOverModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSoundPathForCharacter
`public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**Purpose:** Reads and returns the sound path for character value held by the this instance.

```csharp
// Obtain an instance of DefaultVoiceOverModel from the subsystem API first
DefaultVoiceOverModel defaultVoiceOverModel = ...;
var result = defaultVoiceOverModel.GetSoundPathForCharacter(character, voiceObject);
```

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** Reads and returns the accent class value held by the this instance.

```csharp
// Obtain an instance of DefaultVoiceOverModel from the subsystem API first
DefaultVoiceOverModel defaultVoiceOverModel = ...;
var result = defaultVoiceOverModel.GetAccentClass(culture, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel());
```

## See Also

- [Area Index](../)