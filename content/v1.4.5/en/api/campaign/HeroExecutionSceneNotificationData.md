---
title: "HeroExecutionSceneNotificationData"
description: "Auto-generated class reference for HeroExecutionSceneNotificationData."
---
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`

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

**Purpose:** **Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of HeroExecutionSceneNotificationData from the subsystem API first
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
var result = heroExecutionSceneNotificationData.GetSceneNotificationCharacters();
```

### OnCloseAction
`public override void OnCloseAction()`

**Purpose:** **Purpose:** Invoked when the close action event is raised.

```csharp
// Obtain an instance of HeroExecutionSceneNotificationData from the subsystem API first
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
heroExecutionSceneNotificationData.OnCloseAction();
```

### OnAffirmativeAction
`public override void OnAffirmativeAction()`

**Purpose:** **Purpose:** Invoked when the affirmative action event is raised.

```csharp
// Obtain an instance of HeroExecutionSceneNotificationData from the subsystem API first
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
heroExecutionSceneNotificationData.OnAffirmativeAction();
```

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, RelevantContextType relevantContextType = RelevantContextType.Any, bool showNegativeOption = true)`

**Purpose:** **Purpose:** Constructs a new for player executing hero entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroExecutionSceneNotificationData.CreateForPlayerExecutingHero(dyingHero, onAffirmativeAction, relevantContextType.Any, false);
```

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, RelevantContextType relevantContextType = RelevantContextType.Any, Action onClose = null)`

**Purpose:** **Purpose:** Constructs a new for informing player entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroExecutionSceneNotificationData.CreateForInformingPlayer(executingHero, dyingHero, relevantContextType.Any, null);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HeroExecutionSceneNotificationData entry = ...;
```

## See Also

- [Area Index](../)