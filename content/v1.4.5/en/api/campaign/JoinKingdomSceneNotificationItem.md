---
title: "JoinKingdomSceneNotificationItem"
description: "Auto-generated class reference for JoinKingdomSceneNotificationItem."
---
# JoinKingdomSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JoinKingdomSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/JoinKingdomSceneNotificationItem.cs`

## Overview

`JoinKingdomSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewMemberClan` | `public Clan NewMemberClan { get; }` |
| `KingdomToUse` | `public Kingdom KingdomToUse { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** **Purpose:** Reads and returns the banners value held by the this instance.

```csharp
// Obtain an instance of JoinKingdomSceneNotificationItem from the subsystem API first
JoinKingdomSceneNotificationItem joinKingdomSceneNotificationItem = ...;
var result = joinKingdomSceneNotificationItem.GetBanners();
```

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** **Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of JoinKingdomSceneNotificationItem from the subsystem API first
JoinKingdomSceneNotificationItem joinKingdomSceneNotificationItem = ...;
var result = joinKingdomSceneNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
JoinKingdomSceneNotificationItem joinKingdomSceneNotificationItem = ...;
joinKingdomSceneNotificationItem.GetBanners();
```

## See Also

- [Area Index](../)