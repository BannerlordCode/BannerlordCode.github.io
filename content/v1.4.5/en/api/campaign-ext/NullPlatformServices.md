---
title: "NullPlatformServices"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NullPlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NullPlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class NullPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService/TaleWorlds.PlatformService/NullPlatformServices.cs`

## Overview

`NullPlatformServices` lives in `TaleWorlds.PlatformService` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### ActivateFriendList
`public void ActivateFriendList()`

**Purpose:** Handles logic related to `activate friend list`.

## Usage Example

```csharp
var value = new NullPlatformServices();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)