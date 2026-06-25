---
title: "FindingThirdBannerPieceSceneNotificationItem"
description: "Auto-generated class reference for FindingThirdBannerPieceSceneNotificationItem."
---
# FindingThirdBannerPieceSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FindingThirdBannerPieceSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingThirdBannerPieceSceneNotificationItem.cs`

## Overview

`FindingThirdBannerPieceSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public override string SceneID { get; }` |
| `IsAffirmativeOptionShown` | `public override bool IsAffirmativeOptionShown { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText { get; }` |
| `AffirmativeText` | `public override TextObject AffirmativeText { get; }` |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** Reads and returns the banners value held by the this instance.

```csharp
// Obtain an instance of FindingThirdBannerPieceSceneNotificationItem from the subsystem API first
FindingThirdBannerPieceSceneNotificationItem findingThirdBannerPieceSceneNotificationItem = ...;
var result = findingThirdBannerPieceSceneNotificationItem.GetBanners();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FindingThirdBannerPieceSceneNotificationItem findingThirdBannerPieceSceneNotificationItem = ...;
findingThirdBannerPieceSceneNotificationItem.GetBanners();
```

## See Also

- [Area Index](../)