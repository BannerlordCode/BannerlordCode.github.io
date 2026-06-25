---
title: "ConversationPlayArgs"
description: "Auto-generated class reference for ConversationPlayArgs."
---
# ConversationPlayArgs

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public struct ConversationPlayArgs`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## Overview

`ConversationPlayArgs` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** Executes the ConversationPlayArgs logic.

```csharp
// Obtain an instance of ConversationPlayArgs from the subsystem API first
ConversationPlayArgs conversationPlayArgs = ...;
var result = conversationPlayArgs.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ConversationPlayArgs conversationPlayArgs = ...;
conversationPlayArgs.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## See Also

- [Area Index](../)