<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoinKingdomSceneNotificationItem`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JoinKingdomSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JoinKingdomSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/JoinKingdomSceneNotificationItem.cs`

## Overview

`JoinKingdomSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewMemberClan` | `public Clan NewMemberClan { get; }` |
| `KingdomToUse` | `public Kingdom KingdomToUse { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `RelevantContext` | `public override SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** Gets the current value of `banners`.

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

## Usage Example

```csharp
var value = new JoinKingdomSceneNotificationItem();
value.GetBanners();
```

## See Also

- [Complete Class Catalog](../catalog)