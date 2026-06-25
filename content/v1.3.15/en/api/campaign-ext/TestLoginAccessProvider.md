---
title: "TestLoginAccessProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestLoginAccessProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestLoginAccessProvider

**Namespace:** TaleWorlds.Diamond.AccessProvider.Test
**Module:** TaleWorlds.Diamond
**Type:** `public class TestLoginAccessProvider : ILoginAccessProvider`
**Base:** `ILoginAccessProvider`
**Area:** campaign-ext

## Overview

`TestLoginAccessProvider` lives in `TaleWorlds.Diamond.AccessProvider.Test`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
TestLoginAccessProvider.GetInt64HashCode("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
