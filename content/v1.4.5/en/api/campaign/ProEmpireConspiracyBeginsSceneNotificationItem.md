---
title: "ProEmpireConspiracyBeginsSceneNotificationItem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProEmpireConspiracyBeginsSceneNotificationItem`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProEmpireConspiracyBeginsSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProEmpireConspiracyBeginsSceneNotificationItem : EmpireConspiracySupportsSceneNotificationItemBase`
**Base:** `EmpireConspiracySupportsSceneNotificationItemBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/ProEmpireConspiracyBeginsSceneNotificationItem.cs`

## Overview

`ProEmpireConspiracyBeginsSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |

## Usage Example

```csharp
var example = new ProEmpireConspiracyBeginsSceneNotificationItem();
```

## See Also

- [Complete Class Catalog](../catalog)