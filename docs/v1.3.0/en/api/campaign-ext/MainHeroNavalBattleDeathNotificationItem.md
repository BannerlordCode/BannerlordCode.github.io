<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainHeroNavalBattleDeathNotificationItem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MainHeroNavalBattleDeathNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MainHeroNavalBattleDeathNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroNavalBattleDeathNotificationItem.cs`

## Overview

`MainHeroNavalBattleDeathNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeadHero` | `public Hero DeadHero { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `SceneProperties` | `public override SceneNotificationData.NotificationSceneProperties SceneProperties { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

### GetShips
`public override SceneNotificationData.SceneNotificationShip GetShips()`

**Purpose:** Gets the current value of `ships`.

## Usage Example

```csharp
var value = new MainHeroNavalBattleDeathNotificationItem();
value.GetSceneNotificationCharacters();
```

## See Also

- [Complete Class Catalog](../catalog)