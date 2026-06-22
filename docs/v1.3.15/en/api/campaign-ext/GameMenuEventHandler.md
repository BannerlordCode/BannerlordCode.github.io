<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuEventHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuEventHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuEventHandler : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs`

## Overview

`GameMenuEventHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |
| `MenuOptionId` | `public string MenuOptionId { get; }` |
| `Type` | `public GameMenuEventHandler.EventType Type { get; }` |

## Usage Example

```csharp
// Typical usage of GameMenuEventHandler (Handler)
Mission.Current.AddMissionBehavior(new GameMenuEventHandler());
```

## See Also

- [Complete Class Catalog](../catalog)