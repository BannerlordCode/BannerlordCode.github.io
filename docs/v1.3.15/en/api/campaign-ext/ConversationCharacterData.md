<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationCharacterData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationCharacterData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationCharacterData : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs`

## Overview

`ConversationCharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ConversationCharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new ConversationCharacterData();
```

## See Also

- [Complete Class Catalog](../catalog)