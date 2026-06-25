---
title: "ConversationAnimData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationAnimData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationAnimData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationAnimData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationAnimData.cs`

## Overview

`ConversationAnimData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ConversationAnimData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new ConversationAnimData();
```

## See Also

- [Complete Class Catalog](../catalog)