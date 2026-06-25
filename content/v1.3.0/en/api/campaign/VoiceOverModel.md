---
title: "VoiceOverModel"
description: "Auto-generated class reference for VoiceOverModel."
---
# VoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VoiceOverModel : MBGameModel<VoiceOverModel>`
**Base:** `MBGameModel<VoiceOverModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VoiceOverModel.cs`

## Overview

`VoiceOverModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VoiceOverModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSoundPathForCharacter
`public abstract string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**Purpose:** Reads and returns the `sound path for character` value held by the current object.

```csharp
// Obtain an instance of VoiceOverModel from the subsystem API first
VoiceOverModel voiceOverModel = ...;
var result = voiceOverModel.GetSoundPathForCharacter(character, voiceObject);
```

### GetAccentClass
`public abstract string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** Reads and returns the `accent class` value held by the current object.

```csharp
// Obtain an instance of VoiceOverModel from the subsystem API first
VoiceOverModel voiceOverModel = ...;
var result = voiceOverModel.GetAccentClass(culture, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VoiceOverModel instance = ...;
```

## See Also

- [Area Index](../)