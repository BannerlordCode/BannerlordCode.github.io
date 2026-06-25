---
title: "ConversationAnimationManager"
description: "Auto-generated class reference for ConversationAnimationManager."
---
# ConversationAnimationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationAnimationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationAnimationManager.cs`

## Overview

`ConversationAnimationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConversationAnimationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationAnims` | `public Dictionary<string, ConversationAnimData> ConversationAnims { get; }` |

## Usage Example

```csharp
var manager = ConversationAnimationManager.Current;
```

## See Also

- [Area Index](../)