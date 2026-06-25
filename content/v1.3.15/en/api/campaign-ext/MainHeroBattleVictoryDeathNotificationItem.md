---
title: "MainHeroBattleVictoryDeathNotificationItem"
description: "Auto-generated class reference for MainHeroBattleVictoryDeathNotificationItem."
---
# MainHeroBattleVictoryDeathNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MainHeroBattleVictoryDeathNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleVictoryDeathNotificationItem.cs`

## Overview

`MainHeroBattleVictoryDeathNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeadHero` | `public Hero DeadHero { get; }` |
| `EncounterAllyCharacters` | `public List<CharacterObject> EncounterAllyCharacters { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** **Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of MainHeroBattleVictoryDeathNotificationItem from the subsystem API first
MainHeroBattleVictoryDeathNotificationItem mainHeroBattleVictoryDeathNotificationItem = ...;
var result = mainHeroBattleVictoryDeathNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MainHeroBattleVictoryDeathNotificationItem mainHeroBattleVictoryDeathNotificationItem = ...;
mainHeroBattleVictoryDeathNotificationItem.GetSceneNotificationCharacters();
```

## See Also

- [Area Index](../)