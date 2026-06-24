<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IPartyScreenLogicHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IPartyScreenLogicHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/IPartyScreenLogicHandler.cs`

## Overview

`IPartyScreenLogicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IPartyScreenLogicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IPartyScreenLogicHandler implementation = GetPartyScreenLogicHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)