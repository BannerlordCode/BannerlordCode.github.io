---
title: "IConversationStateHandler"
description: "Auto-generated class reference for IConversationStateHandler."
---
# IConversationStateHandler

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IConversationStateHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs`

## Overview

`IConversationStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IConversationStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIConversationStateHandler service = ...;
```

## See Also

- [Area Index](../)