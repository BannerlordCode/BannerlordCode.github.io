<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeathMapNotification`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeathMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DeathMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/DeathMapNotification.cs`

## Overview

`DeathMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |
| `VictimHero` | `public Hero VictimHero { get; }` |
| `KillerHero` | `public Hero KillerHero { get; }` |
| `KillDetail` | `public KillCharacterAction.KillCharacterActionDetail KillDetail { get; }` |
| `CreationTime` | `public CampaignTime CreationTime { get; }` |

## Usage Example

```csharp
var value = new DeathMapNotification();
```

## See Also

- [Complete Class Catalog](../catalog)