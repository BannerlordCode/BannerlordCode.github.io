<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RansomOfferMapNotification`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RansomOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RansomOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/RansomOfferMapNotification.cs`

## Overview

`RansomOfferMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptiveHero` | `public Hero CaptiveHero { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var value = new RansomOfferMapNotification();
value.IsValid();
```

## See Also

- [Complete Class Catalog](../catalog)