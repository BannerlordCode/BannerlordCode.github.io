---
title: "ClanMemberWarDeathSceneNotificationItem"
description: "Auto-generated class reference for ClanMemberWarDeathSceneNotificationItem."
---
# ClanMemberWarDeathSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanMemberWarDeathSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/ClanMemberWarDeathSceneNotificationItem.cs`

## Overview

`ClanMemberWarDeathSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeadHero` | `public Hero DeadHero { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** Reads and returns the banners value held by the this instance.

```csharp
// Obtain an instance of ClanMemberWarDeathSceneNotificationItem from the subsystem API first
ClanMemberWarDeathSceneNotificationItem clanMemberWarDeathSceneNotificationItem = ...;
var result = clanMemberWarDeathSceneNotificationItem.GetBanners();
```

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of ClanMemberWarDeathSceneNotificationItem from the subsystem API first
ClanMemberWarDeathSceneNotificationItem clanMemberWarDeathSceneNotificationItem = ...;
var result = clanMemberWarDeathSceneNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanMemberWarDeathSceneNotificationItem clanMemberWarDeathSceneNotificationItem = ...;
clanMemberWarDeathSceneNotificationItem.GetBanners();
```

## See Also

- [Area Index](../)