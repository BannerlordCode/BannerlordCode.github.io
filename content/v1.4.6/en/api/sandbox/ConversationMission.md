---
title: "ConversationMission"
description: "ConversationMission: a public class in SandBox; 5 exposed members (1 methods, 4 properties, 0 fields). Source: SandBox/Conversation/ConversationMission.cs."
---
# ConversationMission

**Namespace:** `SandBox.Conversation`
**Module:** `SandBox`
**Type:** `public static class ConversationMission`
**File:** `SandBox/Conversation/ConversationMission.cs`

## Overview

ConversationMission lives in the SandBox module, source file SandBox/Conversation/ConversationMission.cs. It is a public class; the inheritance chain is ConversationMission. It exposes 5 public/protected members: 1 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationMission is a top-level type in SandBox, namespace differing from (SandBox.Conversation) the module directory; inheritance chain ConversationMission. The surface is property-led (properties 4/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Conversation/ConversationMission.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OneToOneConversationAgent` | `public static Agent OneToOneConversationAgent` | property |
| `OneToOneConversationCharacter` | `public static CharacterObject OneToOneConversationCharacter` | property |
| `CurrentSpeakerAgent` | `public static Agent CurrentSpeakerAgent` | property |
| `IEnumerable` | `public static IEnumerable<Agent>ConversationAgents` | property |
| `StartConversationWithAgent` | `public static void StartConversationWithAgent(Agent agent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
