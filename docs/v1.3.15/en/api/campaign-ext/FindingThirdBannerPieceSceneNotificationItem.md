<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FindingThirdBannerPieceSceneNotificationItem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `banners`.

## Usage Example

```csharp
var value = new FindingThirdBannerPieceSceneNotificationItem();
value.GetBanners();
```

## See Also

- [Complete Class Catalog](../catalog)