---
title: "NewBornFemaleHeroSceneNotificationItem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewBornFemaleHeroSceneNotificationItem`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NewBornFemaleHeroSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NewBornFemaleHeroSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/NewBornFemaleHeroSceneNotificationItem.cs`

## Overview

`NewBornFemaleHeroSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaleHero` | `public Hero MaleHero { get; }` |
| `FemaleHero` | `public Hero FemaleHero { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

## Usage Example

```csharp
var value = new NewBornFemaleHeroSceneNotificationItem();
value.GetSceneNotificationCharacters();
```

## See Also

- [Complete Class Catalog](../catalog)