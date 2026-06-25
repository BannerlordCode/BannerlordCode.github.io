---
title: "MainHeroBattleDeathNotificationItem"
description: "Auto-generated class reference for MainHeroBattleDeathNotificationItem."
---
# MainHeroBattleDeathNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MainHeroBattleDeathNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs`

## Overview

`MainHeroBattleDeathNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeadHero` | `public Hero DeadHero { get; }` |
| `KillerCulture` | `public CultureObject KillerCulture { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Reads and returns the `scene notification characters` value held by the current object.

```csharp
// Obtain an instance of MainHeroBattleDeathNotificationItem from the subsystem API first
MainHeroBattleDeathNotificationItem mainHeroBattleDeathNotificationItem = ...;
var result = mainHeroBattleDeathNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MainHeroBattleDeathNotificationItem mainHeroBattleDeathNotificationItem = ...;
mainHeroBattleDeathNotificationItem.GetSceneNotificationCharacters();
```

## See Also

- [Area Index](../)