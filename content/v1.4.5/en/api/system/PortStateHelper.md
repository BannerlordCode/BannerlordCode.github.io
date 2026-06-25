---
title: "PortStateHelper"
description: "Auto-generated class reference for PortStateHelper."
---
# PortStateHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PortStateHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## Overview

`PortStateHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PortStateHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OpenAsTrade
`public static void OpenAsTrade(Town town)`

**Purpose:** **Purpose:** Opens the resource or UI associated with as trade.

```csharp
// Static call; no instance required
PortStateHelper.OpenAsTrade(town);
```

### OpenAsLoot
`public static void OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)`

**Purpose:** **Purpose:** Opens the resource or UI associated with as loot.

```csharp
// Static call; no instance required
PortStateHelper.OpenAsLoot(lootShips, null);
```

### OpenAsRestricted
`public static void OpenAsRestricted(Town town, TextObject restrictedReason)`

**Purpose:** **Purpose:** Opens the resource or UI associated with as restricted.

```csharp
// Static call; no instance required
PortStateHelper.OpenAsRestricted(town, restrictedReason);
```

### OpenAsStoryMode
`public static void OpenAsStoryMode(Settlement settlement)`

**Purpose:** **Purpose:** Opens the resource or UI associated with as story mode.

```csharp
// Static call; no instance required
PortStateHelper.OpenAsStoryMode(settlement);
```

### OpenAsManageFleet
`public static void OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)`

**Purpose:** **Purpose:** Opens the resource or UI associated with as manage fleet.

```csharp
// Static call; no instance required
PortStateHelper.OpenAsManageFleet(leftShips);
```

### OpenAsManageOtherFleet
`public static void OpenAsManageOtherFleet(PartyBase other, Action onEndAction)`

**Purpose:** **Purpose:** Opens the resource or UI associated with as manage other fleet.

```csharp
// Static call; no instance required
PortStateHelper.OpenAsManageOtherFleet(other, onEndAction);
```

## Usage Example

```csharp
PortStateHelper.Initialize();
```

## See Also

- [Area Index](../)