---
title: "ConversationMissionLogic"
description: "ConversationMissionLogic: a public class in SandBox, inheriting MissionLogic; 8 exposed members (4 methods, 3 properties, 0 fields). Source: SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs."
---
# ConversationMissionLogic

**Namespace:** `SandBox.Conversation.MissionLogics`
**Module:** `SandBox`
**Type:** `public class ConversationMissionLogic : MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs`

## Overview

ConversationMissionLogic lives in the SandBox module, source file SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ConversationMissionLogic → MissionLogic. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Conversation.MissionLogics) the module directory; inheritance chain ConversationMissionLogic → MissionLogic. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OtherSideConversationData` | `public ConversationCharacterData OtherSideConversationData` | property |
| `PlayerConversationData` | `public ConversationCharacterData PlayerConversationData` | property |
| `IsMultiAgentConversation` | `public bool IsMultiAgentConversation` | property |
| `ConversationMissionLogic` | `public ConversationMissionLogic(ConversationCharacterData playerCharacterData, ConversationCharacterData otherCharacterData, bool isMultiAgentConversation)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionConversationLogic](../MissionConversationLogic)
