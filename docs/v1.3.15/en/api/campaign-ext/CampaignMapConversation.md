<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignMapConversation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignMapConversation

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignMapConversation`
**Area:** campaign-ext

## Overview

`CampaignMapConversation` lives in `TaleWorlds.CampaignSystem.Conversation`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenConversation
`public static void OpenConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**Purpose:** Handles logic related to `open conversation`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CampaignMapConversation.OpenConversation(playerCharacterData, conversationPartnerData);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
