<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceOverModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VoiceOverModel : MBGameModel<VoiceOverModel>`
**Base:** `MBGameModel<VoiceOverModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VoiceOverModel.cs`

## Overview

`VoiceOverModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<VoiceOverModel>(new MyVoiceOverModel())` to change how it computes.

## Key Methods

### GetSoundPathForCharacter
```csharp
public abstract string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)
```

### GetAccentClass
```csharp
public abstract string GetAccentClass(CultureObject culture, bool isHighClass)
```

## Usage Example

```csharp
// Typical usage of VoiceOverModel (Model)
Game.Current.ReplaceModel<VoiceOverModel>(new MyVoiceOverModel());
```

## See Also

- [Complete Class Catalog](../catalog)