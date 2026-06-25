---
title: "VoiceOverModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceOverModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `sound path for character`.

### GetAccentClass
`public abstract string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** Gets the current value of `accent class`.

## Usage Example

```csharp
var implementation = new CustomVoiceOverModel();
```

## See Also

- [Complete Class Catalog](../catalog)