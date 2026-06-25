---
title: "BannerExtensions"
description: "Auto-generated class reference for BannerExtensions."
---
# BannerExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class BannerExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BannerExtensions.cs`

## Overview

`BannerExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContentsSameWith
`public static bool IsContentsSameWith(this Banner banner, Banner otherBanner)`

**Purpose:** Determines whether the this instance is in the contents same with state or condition.

```csharp
// Static call; no instance required
BannerExtensions.IsContentsSameWith(banner, otherBanner);
```

## Usage Example

```csharp
BannerExtensions.IsContentsSameWith(banner, otherBanner);
```

## See Also

- [Area Index](../)