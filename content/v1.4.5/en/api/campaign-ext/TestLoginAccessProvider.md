---
title: "TestLoginAccessProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestLoginAccessProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TestLoginAccessProvider

**Namespace:** TaleWorlds.Diamond.AccessProvider.Test
**Module:** TaleWorlds.Diamond
**Type:** `public class TestLoginAccessProvider : ILoginAccessProvider`
**Base:** `ILoginAccessProvider`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond.AccessProvider.Test/TaleWorlds.Diamond.AccessProvider.Test/TestLoginAccessProvider.cs`

## Overview

`TestLoginAccessProvider` lives in `TaleWorlds.Diamond.AccessProvider.Test` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.AccessProvider.Test` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetInt64HashCode
`public static ulong GetInt64HashCode(string strText)`

**Purpose:** Gets the current value of `int64 hash code`.

### GetPlayerIdFromUserName
`public static PlayerId GetPlayerIdFromUserName(string userName)`

**Purpose:** Gets the current value of `player id from user name`.

## Usage Example

```csharp
TestLoginAccessProvider.GetInt64HashCode("example");
```

## See Also

- [Complete Class Catalog](../catalog)