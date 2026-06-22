<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationAnimationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationAnimationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationAnimationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationAnimationManager.cs`

## Overview

`ConversationAnimationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationAnims` | `public Dictionary<string, ConversationAnimData> ConversationAnims { get; }` |

## Usage Example

```csharp
// Typical usage of ConversationAnimationManager (Manager)
ConversationAnimationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)