<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IConversationStateHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IConversationStateHandler

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs`

## Overview

`IConversationStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IConversationStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IConversationStateHandler implementation = GetConversationStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)