---
title: "HeroExecutionSceneNotificationData"
description: "Auto-generated class reference for HeroExecutionSceneNotificationData."
---
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

**Purpose:** **Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of HeroExecutionSceneNotificationData from the subsystem API first
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
var result = heroExecutionSceneNotificationData.GetSceneNotificationCharacters();
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
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any, bool showNegativeOption = true)`

**Purpose:** **Purpose:** Constructs a new for player executing hero entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroExecutionSceneNotificationData.CreateForPlayerExecutingHero(dyingHero, onAffirmativeAction, sceneNotificationData.RelevantContextType.Any, false);
```

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any)`

**Purpose:** **Purpose:** Constructs a new for informing player entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroExecutionSceneNotificationData.CreateForInformingPlayer(executingHero, dyingHero, sceneNotificationData.RelevantContextType.Any);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HeroExecutionSceneNotificationData entry = ...;
```

## See Also

- [Area Index](../)