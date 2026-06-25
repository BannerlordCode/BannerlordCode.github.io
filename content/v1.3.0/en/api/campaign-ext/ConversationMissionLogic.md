---
title: "ConversationMissionLogic"
description: "Auto-generated class reference for ConversationMissionLogic."
---
# ConversationMissionLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class ConversationMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs`

## Overview

`ConversationMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ConversationMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OtherSideConversationData` | `public ConversationCharacterData OtherSideConversationData { get; }` |
| `PlayerConversationData` | `public ConversationCharacterData PlayerConversationData { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ConversationMissionLogic from the subsystem API first
ConversationMissionLogic conversationMissionLogic = ...;
conversationMissionLogic.AfterStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Invoked when the `rendering started` event is raised.

```csharp
// Obtain an instance of ConversationMissionLogic from the subsystem API first
ConversationMissionLogic conversationMissionLogic = ...;
conversationMissionLogic.OnRenderingStarted();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of ConversationMissionLogic from the subsystem API first
ConversationMissionLogic conversationMissionLogic = ...;
conversationMissionLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ConversationMissionLogic>();
```

## See Also

- [Area Index](../)