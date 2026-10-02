---
title: "IConversationStateHandler"
description: "IConversationStateHandler: a public interface in TaleWorlds.CampaignSystem; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs."
---
# IConversationStateHandler

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IConversationStateHandler`
**File:** `TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs`

## Overview

IConversationStateHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs. It is a public interface; the inheritance chain is IConversationStateHandler. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IConversationStateHandler is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Conversation) the module directory; inheritance chain IConversationStateHandler. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnConversationInstall` | `void OnConversationInstall();` | method |
| `OnConversationUninstall` | `void OnConversationUninstall();` | method |
| `OnConversationActivate` | `void OnConversationActivate();` | method |
| `OnConversationDeactivate` | `void OnConversationDeactivate();` | method |
| `OnConversationContinue` | `void OnConversationContinue();` | method |
| `ExecuteConversationContinue` | `void ExecuteConversationContinue();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMapConversation](../CampaignMapConversation)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager)
- [same namespace ConversationAnimData](../ConversationAnimData)
- [same namespace ConversationCharacterData](../ConversationCharacterData)
