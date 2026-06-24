<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroExecutionSceneNotificationData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`

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
| `SceneID` | `public override string SceneID { get; }` |
| `NegativeText` | `public override TextObject NegativeText { get; }` |
| `IsAffirmativeOptionShown` | `public override bool IsAffirmativeOptionShown { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `AffirmativeText` | `public override TextObject AffirmativeText { get; }` |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText { get; }` |
| `AffirmativeHintText` | `public override TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public override TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText { get; }` |
| `RelevantContext` | `public override SceneNotificationData.RelevantContextType RelevantContext { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

### OnAffirmativeAction
`public override void OnAffirmativeAction()`

**Purpose:** Called when the `affirmative action` event is raised.

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any, bool showNegativeOption = true)`

**Purpose:** Creates a new `for player executing hero` instance or object.

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any)`

**Purpose:** Creates a new `for informing player` instance or object.

## Usage Example

```csharp
var value = new HeroExecutionSceneNotificationData();
```

## See Also

- [Complete Class Catalog](../catalog)