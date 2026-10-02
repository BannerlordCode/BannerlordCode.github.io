---
title: "ChatLogHotKeyCategory"
description: "ChatLogHotKeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 8 exposed members (0 methods, 0 properties, 7 fields). Source: TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs."
---
# ChatLogHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class ChatLogHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs`

## Overview

ChatLogHotKeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is ChatLogHotKeyCategory → GameKeyContext. It exposes 8 public/protected members: 7 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatLogHotKeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ChatLogHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/8, properties 0/8), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogHotKeyCategory` | `public ChatLogHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `InitiateAllChat` | `public const int InitiateAllChat` | field |
| `InitiateTeamChat` | `public const int InitiateTeamChat` | field |
| `FinalizeChat` | `public const int FinalizeChat` | field |
| `CycleChatTypes` | `public const string CycleChatTypes` | field |
| `FinalizeChatAlternative` | `public const string FinalizeChatAlternative` | field |
| `SendMessage` | `public const string SendMessage` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
