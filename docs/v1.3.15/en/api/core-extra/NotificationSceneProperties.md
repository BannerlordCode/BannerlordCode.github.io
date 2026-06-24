<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotificationSceneProperties`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotificationSceneProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct NotificationSceneProperties`
**Area:** core-extra

## Overview

`NotificationSceneProperties` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties { get; }` |

## Key Methods

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
`public virtual SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

### GetShips
`public virtual SceneNotificationData.SceneNotificationShip GetShips()`

**Purpose:** Gets the current value of `ships`.

## Usage Example

```csharp
// First obtain a NotificationSceneProperties instance from game state, then call one of its public methods
var value = new NotificationSceneProperties();
value.OnAffirmativeAction();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
