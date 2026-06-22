<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneNotificationData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** none
**File:** `TaleWorlds.Core/SceneNotificationData.cs`

## Overview

`SceneNotificationData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

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
```csharp
public virtual void OnAffirmativeAction()
```

### OnNegativeAction
```csharp
public virtual void OnNegativeAction()
```

### OnCloseAction
```csharp
public virtual void OnCloseAction()
```

### GetBanners
```csharp
public virtual Banner GetBanners()
```

### GetSceneNotificationCharacters
```csharp
public virtual SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()
```

### GetShips
```csharp
public virtual SceneNotificationData.SceneNotificationShip GetShips()
```

## Usage Example

```csharp
// Typical usage of SceneNotificationData (Data)
new SceneNotificationData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)