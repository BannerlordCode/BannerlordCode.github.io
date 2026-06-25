---
title: "MessageInfo"
description: "Auto-generated class reference for MessageInfo."
---
# MessageInfo

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class MessageInfo`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageInfo.cs`

## Overview

`MessageInfo` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceIPAddress` | `public string SourceIPAddress { get; set; }` |
| `SourceClientId` | `public Guid SourceClientId { get; set; }` |
| `SourceUserName` | `public string SourceUserName { get; set; }` |
| `SourcePlatform` | `public string SourcePlatform { get; set; }` |
| `SourcePlatformId` | `public string SourcePlatformId { get; set; }` |
| `DestinationPostBox` | `public string DestinationPostBox { get; set; }` |
| `DestinationClientId` | `public Guid DestinationClientId { get; set; }` |

## Key Methods

### WriteTo
`public void WriteTo(Stream stream, bool fromServer)`

**Purpose:** **Purpose:** Writes to to the target location.

```csharp
// Obtain an instance of MessageInfo from the subsystem API first
MessageInfo messageInfo = ...;
messageInfo.WriteTo(stream, false);
```

### ReadFrom
`public static MessageInfo ReadFrom(Stream stream, bool fromServer)`

**Purpose:** **Purpose:** Reads the data or state of from.

```csharp
// Static call; no instance required
MessageInfo.ReadFrom(stream, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MessageInfo messageInfo = ...;
messageInfo.WriteTo(stream, false);
```

## See Also

- [Area Index](../)