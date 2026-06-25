---
title: "PledgeAllegianceSceneNotificationItem"
description: "Auto-generated class reference for PledgeAllegianceSceneNotificationItem."
---
# PledgeAllegianceSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PledgeAllegianceSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/PledgeAllegianceSceneNotificationItem.cs`

## Overview

`PledgeAllegianceSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerHero` | `public Hero PlayerHero { get; }` |
| `PlayerWantsToRestore` | `public bool PlayerWantsToRestore { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** Reads and returns the `banners` value held by the current object.

```csharp
// Obtain an instance of PledgeAllegianceSceneNotificationItem from the subsystem API first
PledgeAllegianceSceneNotificationItem pledgeAllegianceSceneNotificationItem = ...;
var result = pledgeAllegianceSceneNotificationItem.GetBanners();
```

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Reads and returns the `scene notification characters` value held by the current object.

```csharp
// Obtain an instance of PledgeAllegianceSceneNotificationItem from the subsystem API first
PledgeAllegianceSceneNotificationItem pledgeAllegianceSceneNotificationItem = ...;
var result = pledgeAllegianceSceneNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PledgeAllegianceSceneNotificationItem pledgeAllegianceSceneNotificationItem = ...;
pledgeAllegianceSceneNotificationItem.GetBanners();
```

## See Also

- [Area Index](../)