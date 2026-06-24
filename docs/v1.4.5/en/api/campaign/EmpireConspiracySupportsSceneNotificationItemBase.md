<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmpireConspiracySupportsSceneNotificationItemBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EmpireConspiracySupportsSceneNotificationItemBase

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmpireConspiracySupportsSceneNotificationItemBase : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/EmpireConspiracySupportsSceneNotificationItemBase.cs`

## Overview

`EmpireConspiracySupportsSceneNotificationItemBase` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `King` | `public Hero King { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** Gets the current value of `banners`.

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Gets the current value of `scene notification characters`.

## Usage Example

```csharp
var implementation = new CustomEmpireConspiracySupportsSceneNotificationItemBase();
```

## See Also

- [Complete Class Catalog](../catalog)