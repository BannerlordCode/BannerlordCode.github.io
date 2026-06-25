---
title: "FindingFirstBannerPieceSceneNotificationItem"
description: "Auto-generated class reference for FindingFirstBannerPieceSceneNotificationItem."
---
# FindingFirstBannerPieceSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FindingFirstBannerPieceSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/FindingFirstBannerPieceSceneNotificationItem.cs`

## Overview

`FindingFirstBannerPieceSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerHero` | `public Hero PlayerHero { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### OnCloseAction
`public override void OnCloseAction()`

**Purpose:** Invoked when the `close action` event is raised.

```csharp
// Obtain an instance of FindingFirstBannerPieceSceneNotificationItem from the subsystem API first
FindingFirstBannerPieceSceneNotificationItem findingFirstBannerPieceSceneNotificationItem = ...;
findingFirstBannerPieceSceneNotificationItem.OnCloseAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FindingFirstBannerPieceSceneNotificationItem findingFirstBannerPieceSceneNotificationItem = ...;
findingFirstBannerPieceSceneNotificationItem.OnCloseAction();
```

## See Also

- [Area Index](../)