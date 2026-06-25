---
title: "Win64_Shipping_Client"
description: "Auto-generated class reference for Win64_Shipping_Client."
---
# Win64_Shipping_Client

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Win64_Shipping_Client`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/VirtualFolders.cs`

## Overview

`Win64_Shipping_Client` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFileContent
`public static string GetFileContent(string filePath, Type type = null)`

**Purpose:** **Purpose:** Reads and returns the file content value held by the this instance.

```csharp
// Static call; no instance required
Win64_Shipping_Client.GetFileContent("example", null);
```

## Usage Example

```csharp
Win64_Shipping_Client.GetFileContent("example", null);
```

## See Also

- [Area Index](../)