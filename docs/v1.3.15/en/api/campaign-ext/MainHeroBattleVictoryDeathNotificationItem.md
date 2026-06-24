<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainHeroBattleVictoryDeathNotificationItem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainHeroBattleVictoryDeathNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MainHeroBattleVictoryDeathNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleVictoryDeathNotificationItem.cs`

## Overview

`MainHeroBattleVictoryDeathNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeadHero` | `public Hero DeadHero { get; }` |
| `EncounterAllyCharacters` | `public List<CharacterObject> EncounterAllyCharacters { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

## Usage Example

```csharp
var value = new MainHeroBattleVictoryDeathNotificationItem();
value.GetSceneNotificationCharacters();
```

## See Also

- [Complete Class Catalog](../catalog)