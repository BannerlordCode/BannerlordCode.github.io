---
title: "ConversationMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationMissionLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class ConversationMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Conversation.MissionLogics/ConversationMissionLogic.cs`

## Overview

`ConversationMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ConversationMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OtherSideConversationData` | `public ConversationCharacterData OtherSideConversationData { get; }` |
| `PlayerConversationData` | `public ConversationCharacterData PlayerConversationData { get; }` |
| `IsMultiAgentConversation` | `public bool IsMultiAgentConversation { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ConversationMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)