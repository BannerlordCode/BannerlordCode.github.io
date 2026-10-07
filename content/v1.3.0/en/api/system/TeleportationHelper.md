---
title: "TeleportationHelper"
description: "Auto-generated class reference for TeleportationHelper."
---
# TeleportationHelper

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TeleportationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/TeleportationHelper.cs`

## Overview

`TeleportationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `TeleportationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHoursLeftForTeleportingHeroToReachItsDestination
`public static float GetHoursLeftForTeleportingHeroToReachItsDestination(Hero teleportingHero)`

**Purpose:** Reads and returns the hours left for teleporting hero to reach its destination value held by the this instance.

```csharp
// Static call; no instance required
TeleportationHelper.GetHoursLeftForTeleportingHeroToReachItsDestination(teleportingHero);
```

## Usage Example

```csharp
TeleportationHelper.Initialize();
```

## See Also

- [Area Index](../)