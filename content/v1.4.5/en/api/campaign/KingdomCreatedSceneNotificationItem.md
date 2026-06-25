---
title: "KingdomCreatedSceneNotificationItem"
description: "Auto-generated class reference for KingdomCreatedSceneNotificationItem."
---
# KingdomCreatedSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomCreatedSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/KingdomCreatedSceneNotificationItem.cs`

## Overview

`KingdomCreatedSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewKingdom` | `public Kingdom NewKingdom { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** Reads and returns the `banners` value held by the current object.

```csharp
// Obtain an instance of KingdomCreatedSceneNotificationItem from the subsystem API first
KingdomCreatedSceneNotificationItem kingdomCreatedSceneNotificationItem = ...;
var result = kingdomCreatedSceneNotificationItem.GetBanners();
```

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Reads and returns the `scene notification characters` value held by the current object.

```csharp
// Obtain an instance of KingdomCreatedSceneNotificationItem from the subsystem API first
KingdomCreatedSceneNotificationItem kingdomCreatedSceneNotificationItem = ...;
var result = kingdomCreatedSceneNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomCreatedSceneNotificationItem kingdomCreatedSceneNotificationItem = ...;
kingdomCreatedSceneNotificationItem.GetBanners();
```

## See Also

- [Area Index](../)