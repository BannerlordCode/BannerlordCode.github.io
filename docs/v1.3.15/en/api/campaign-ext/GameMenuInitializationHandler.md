<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuInitializationHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuInitializationHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuInitializationHandler : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs`

## Overview

`GameMenuInitializationHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |

## Usage Example

```csharp
// Typical usage of GameMenuInitializationHandler (Handler)
Mission.Current.AddMissionBehavior(new GameMenuInitializationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)