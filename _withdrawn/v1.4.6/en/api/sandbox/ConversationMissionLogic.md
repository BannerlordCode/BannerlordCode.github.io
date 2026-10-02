---
title: "ConversationMissionLogic"
description: "ConversationMissionLogic: a public class in SandBox.Conversation.MissionLogics, inheriting MissionLogic; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationMissionLogic

**Namespace:** `SandBox.Conversation.MissionLogics`
**Module:** `SandBox`
**Type:** `public class ConversationMissionLogic : MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ConversationMissionLogic lives in the SandBox module, source file SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ConversationMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Conversation.MissionLogics`, inheritance chain ConversationMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace MissionConversationLogic](../MissionConversationLogic/)
