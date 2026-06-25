---
title: "DefaultVoiceOverModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVoiceOverModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `sound path for character`.

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**Purpose:** Gets the current value of `accent class`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel());
```

## See Also

- [Complete Class Catalog](../catalog)