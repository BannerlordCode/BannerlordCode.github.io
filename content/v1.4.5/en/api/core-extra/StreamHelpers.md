---
title: "StreamHelpers"
description: "Auto-generated class reference for StreamHelpers."
---
# StreamHelpers

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class StreamHelpers`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/SRTHelper.cs`

## Overview

`StreamHelpers` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CopyStream
`public static Stream CopyStream(Stream inputStream)`

**Purpose:** **Purpose:** Copies the stream state of the this instance to a target.

```csharp
// Static call; no instance required
StreamHelpers.CopyStream(inputStream);
```

## Usage Example

```csharp
StreamHelpers.CopyStream(inputStream);
```

## See Also

- [Area Index](../)