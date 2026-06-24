<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IKingdomStateHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IKingdomStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IKingdomStateHandler.cs`

## Overview

`IKingdomStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IKingdomStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IKingdomStateHandler implementation = GetKingdomStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)