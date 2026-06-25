---
title: "SupportedFactionDefeatedSceneNotificationItem"
description: "Auto-generated class reference for SupportedFactionDefeatedSceneNotificationItem."
---
# SupportedFactionDefeatedSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SupportedFactionDefeatedSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/SupportedFactionDefeatedSceneNotificationItem.cs`

## Overview

`SupportedFactionDefeatedSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction` | `public Kingdom Faction { get; }` |
| `PlayerWantsRestore` | `public bool PlayerWantsRestore { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** **Purpose:** Reads and returns the banners value held by the this instance.

```csharp
// Obtain an instance of SupportedFactionDefeatedSceneNotificationItem from the subsystem API first
SupportedFactionDefeatedSceneNotificationItem supportedFactionDefeatedSceneNotificationItem = ...;
var result = supportedFactionDefeatedSceneNotificationItem.GetBanners();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SupportedFactionDefeatedSceneNotificationItem supportedFactionDefeatedSceneNotificationItem = ...;
supportedFactionDefeatedSceneNotificationItem.GetBanners();
```

## See Also

- [Area Index](../)