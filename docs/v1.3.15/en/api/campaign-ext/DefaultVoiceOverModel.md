<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVoiceOverModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVoiceOverModel.cs`

## Overview

`DefaultVoiceOverModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel())` to change how it computes.

## Key Methods

### GetSoundPathForCharacter
```csharp
public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)
```

### GetAccentClass
```csharp
public override string GetAccentClass(CultureObject culture, bool isHighClass)
```

## Usage Example

```csharp
// Typical usage of DefaultVoiceOverModel (Model)
Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel());
```

## See Also

- [Complete Class Catalog](../catalog)