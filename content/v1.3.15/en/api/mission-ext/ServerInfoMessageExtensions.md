---
title: "ServerInfoMessageExtensions"
description: "Auto-generated class reference for ServerInfoMessageExtensions."
---
# ServerInfoMessageExtensions

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ServerInfoMessageExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ServerInfoMessageExtensions.cs`

## Overview

`ServerInfoMessageExtensions` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescription
`public static TextObject GetDescription(this SystemMessage message)`

**Purpose:** Reads and returns the description value held by the this instance.

```csharp
// Static call; no instance required
ServerInfoMessageExtensions.GetDescription(message);
```

## Usage Example

```csharp
ServerInfoMessageExtensions.GetDescription(message);
```

## See Also

- [Area Index](../)