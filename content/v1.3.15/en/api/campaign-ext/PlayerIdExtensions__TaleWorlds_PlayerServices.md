---
title: "PlayerIdExtensions__TaleWorlds_PlayerServices"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerIdExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerIdExtensions

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public static class PlayerIdExtensions`
**Base:** none
**File:** `TaleWorlds.PlayerServices/PlayerServices/PlayerIdExtensions.cs`

## Overview

`PlayerIdExtensions` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SupportsPlayerCard
`public static bool SupportsPlayerCard(this PlayerIdProvidedTypes type)`

**Purpose:** Handles logic related to `supports player card`.

## Usage Example

```csharp
PlayerIdExtensions.SupportsPlayerCard(type);
```

## See Also

- [Complete Class Catalog](../catalog)