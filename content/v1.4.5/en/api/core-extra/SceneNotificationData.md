---
title: "SceneNotificationData"
description: "Auto-generated class reference for SceneNotificationData."
---
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/SceneNotificationData.cs`

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

**Purpose:** **Purpose:** Executes the SceneNotificationCharacter logic.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.SceneNotificationCharacter(character, null, default(BodyProperties), false, 0, 0, false);
```

### SceneNotificationShip
`public readonly struct SceneNotificationShip(string shipPrefabId, List<ShipVisualSlotInfo> shipUpgrades, float shipHitPointRatio, uint sailColor1, uint sailColor2, int shipSeed)`

**Purpose:** **Purpose:** Executes the SceneNotificationShip logic.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.SceneNotificationShip("example", shipUpgrades, 0, 0, 0, 0);
```

### OnAffirmativeAction
`public virtual void OnAffirmativeAction()`

**Purpose:** **Purpose:** Invoked when the affirmative action event is raised.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnAffirmativeAction();
```

### OnNegativeAction
`public virtual void OnNegativeAction()`

**Purpose:** **Purpose:** Invoked when the negative action event is raised.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnNegativeAction();
```

### OnCloseAction
`public virtual void OnCloseAction()`

**Purpose:** **Purpose:** Invoked when the close action event is raised.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnCloseAction();
```

### GetBanners
`public virtual Banner GetBanners()`

**Purpose:** **Purpose:** Reads and returns the banners value held by the this instance.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetBanners();
```

### GetSceneNotificationCharacters
`public virtual SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** **Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of SceneNotificationData from the subsystem API first
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetSceneNotificationCharacters();
```

### GetShips
`public virtual SceneNotificationShip GetShips()`

**Purpose:** **Purpose:** Reads and returns the ships value held by the this instance.

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