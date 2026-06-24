<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroExecutionSceneNotificationData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`

## Overview

`HeroExecutionSceneNotificationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HeroExecutionSceneNotificationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Executer` | `public Hero Executer { get; }` |
| `Victim` | `public Hero Victim { get; }` |
| `IsNegativeOptionShown` | `public override bool IsNegativeOptionShown { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `AffirmativeText` | `public override TextObject AffirmativeText { get; }` |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText { get; }` |
| `AffirmativeHintText` | `public override TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public override TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText { get; }` |
| `RelevantContext` | `public override RelevantContextType RelevantContext { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

### OnCloseAction
`public override void OnCloseAction()`

**Purpose:** Called when the `close action` event is raised.

### OnAffirmativeAction
`public override void OnAffirmativeAction()`

**Purpose:** Called when the `affirmative action` event is raised.

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, RelevantContextType relevantContextType = RelevantContextType.Any, bool showNegativeOption = true)`

**Purpose:** Creates a new `for player executing hero` instance or object.

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, RelevantContextType relevantContextType = RelevantContextType.Any, Action onClose = null)`

**Purpose:** Creates a new `for informing player` instance or object.

## Usage Example

```csharp
var value = new HeroExecutionSceneNotificationData();
```

## See Also

- [Complete Class Catalog](../catalog)