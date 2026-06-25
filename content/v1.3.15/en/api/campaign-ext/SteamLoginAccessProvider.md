---
title: "SteamLoginAccessProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamLoginAccessProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SteamLoginAccessProvider

**Namespace:** TaleWorlds.Diamond.AccessProvider.Steam
**Module:** TaleWorlds.Diamond
**Type:** `public class SteamLoginAccessProvider : ILoginAccessProvider`
**Base:** `ILoginAccessProvider`
**File:** `TaleWorlds.Diamond.AccessProvider.Steam/SteamLoginAccessProvider.cs`

## Overview

`SteamLoginAccessProvider` lives in `TaleWorlds.Diamond.AccessProvider.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.AccessProvider.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new SteamLoginAccessProvider();
```

## See Also

- [Complete Class Catalog](../catalog)