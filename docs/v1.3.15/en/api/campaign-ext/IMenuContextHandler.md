<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMenuContextHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IMenuContextHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs`

## Overview

`IMenuContextHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMenuContextHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMenuContextHandler implementation = GetMenuContextHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)