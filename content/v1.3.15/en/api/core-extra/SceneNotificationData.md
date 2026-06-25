---
title: "SceneNotificationData"
description: "Auto-generated class reference for SceneNotificationData."
---
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** none
**File:** `TaleWorlds.Core/SceneNotificationData.cs`

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
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties { get; }` |

## Key Methods

### OnAffirmativeAction
`public virtual void OnAffirmativeAction()`

**Purpose:** Invoked when the `affirmative action` event is raised.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnAffirmativeAction();
```

### OnNegativeAction
`public virtual void OnNegativeAction()`

**Purpose:** Invoked when the `negative action` event is raised.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnNegativeAction();
```

### OnCloseAction
`public virtual void OnCloseAction()`

**Purpose:** Invoked when the `close action` event is raised.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnCloseAction();
```

### GetBanners
`public virtual Banner GetBanners()`

**Purpose:** Reads and returns the `banners` value held by the current object.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetBanners();
```

### GetSceneNotificationCharacters
`public virtual SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Reads and returns the `scene notification characters` value held by the current object.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetSceneNotificationCharacters();
```

### GetShips
`public virtual SceneNotificationData.SceneNotificationShip GetShips()`

**Purpose:** Reads and returns the `ships` value held by the current object.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetShips();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SceneNotificationData entry = ...;
```

## See Also

- [Area Index](../)