<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuInitializationHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuInitializationHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuInitializationHandler : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenuInitializationHandler.cs`

## Overview

`GameMenuInitializationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameMenuInitializationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new GameMenuInitializationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)