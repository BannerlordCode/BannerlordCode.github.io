---
title: "TestLoginAccessProvider"
description: "Auto-generated class reference for TestLoginAccessProvider."
---
# TestLoginAccessProvider

**Namespace:** TaleWorlds.Diamond.AccessProvider.Test
**Module:** TaleWorlds.Diamond
**Type:** `public class TestLoginAccessProvider : ILoginAccessProvider`
**Base:** `ILoginAccessProvider`
**File:** `bin/TaleWorlds.Diamond.AccessProvider.Test/TaleWorlds.Diamond.AccessProvider.Test/TestLoginAccessProvider.cs`

## Overview

`TestLoginAccessProvider` lives in `TaleWorlds.Diamond.AccessProvider.Test` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.AccessProvider.Test` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetInt64HashCode
`public static ulong GetInt64HashCode(string strText)`

**Purpose:** **Purpose:** Reads and returns the int64 hash code value held by the this instance.

```csharp
// Static call; no instance required
TestLoginAccessProvider.GetInt64HashCode("example");
```

### GetPlayerIdFromUserName
`public static PlayerId GetPlayerIdFromUserName(string userName)`

**Purpose:** **Purpose:** Reads and returns the player id from user name value held by the this instance.

```csharp
// Static call; no instance required
TestLoginAccessProvider.GetPlayerIdFromUserName("example");
```

## Usage Example

```csharp
TestLoginAccessProvider.GetInt64HashCode("example");
```

## See Also

- [Area Index](../)