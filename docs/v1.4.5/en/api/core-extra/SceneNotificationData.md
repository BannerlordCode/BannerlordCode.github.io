<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneNotificationData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/SceneNotificationData.cs`

## Overview

`SceneNotificationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SceneNotificationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public virtual string SceneID { get; }` |
| `SoundEventPath` | `public virtual string SoundEventPath { get; }` |
| `TitleText` | `public virtual TextObject TitleText { get; }` |
| `AffirmativeDescriptionText` | `public virtual TextObject AffirmativeDescriptionText { get; }` |
| `NegativeDescriptionText` | `public virtual TextObject NegativeDescriptionText { get; }` |
| `AffirmativeHintText` | `public virtual TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public virtual TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeTitleText` | `public virtual TextObject AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public virtual TextObject NegativeTitleText { get; }` |
| `AffirmativeText` | `public virtual TextObject AffirmativeText { get; }` |
| `NegativeText` | `public virtual TextObject NegativeText { get; }` |
| `IsAffirmativeOptionShown` | `public virtual bool IsAffirmativeOptionShown { get; }` |
| `IsNegativeOptionShown` | `public virtual bool IsNegativeOptionShown { get; }` |
| `PauseActiveState` | `public virtual bool PauseActiveState { get; }` |
| `RelevantContext` | `public virtual RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual NotificationSceneProperties SceneProperties { get; }` |

## Key Methods

### SceneNotificationCharacter
`public readonly struct SceneNotificationCharacter(BasicCharacterObject character, Equipment overriddenEquipment = null, BodyProperties overriddenBodyProperties = default(BodyProperties), bool useCivilianEquipment = false, uint customColor1 = uint.MaxValue, uint customColor2 = uint.MaxValue, bool useHorse = false)`

**Purpose:** Handles logic related to `scene notification character`.

### SceneNotificationShip
`public readonly struct SceneNotificationShip(string shipPrefabId, List<ShipVisualSlotInfo> shipUpgrades, float shipHitPointRatio, uint sailColor1, uint sailColor2, int shipSeed)`

**Purpose:** Handles logic related to `scene notification ship`.

### OnAffirmativeAction
`public virtual void OnAffirmativeAction()`

**Purpose:** Called when the `affirmative action` event is raised.

### OnNegativeAction
`public virtual void OnNegativeAction()`

**Purpose:** Called when the `negative action` event is raised.

### OnCloseAction
`public virtual void OnCloseAction()`

**Purpose:** Called when the `close action` event is raised.

### GetBanners
`public virtual Banner GetBanners()`

**Purpose:** Gets the current value of `banners`.

### GetSceneNotificationCharacters
`public virtual SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

### GetShips
`public virtual SceneNotificationShip GetShips()`

**Purpose:** Gets the current value of `ships`.

## Usage Example

```csharp
var value = new SceneNotificationData();
```

## See Also

- [Complete Class Catalog](../catalog)