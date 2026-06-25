---
title: "DeclareWarAction"
description: "Auto-generated campaign action reference for DeclareWarAction."
---
# DeclareWarAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`

DeclareWarAction is a set of static methods that trigger "DeclareWar" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by kingdom decision to the this instance.

### ApplyByDefault

```csharp
public static void ApplyByDefault(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by default to the this instance.

### ApplyByPlayerHostility

```csharp
public static void ApplyByPlayerHostility(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by player hostility to the this instance.

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by rebellion to the this instance.

### ApplyByCrimeRatingChange

```csharp
public static void ApplyByCrimeRatingChange(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by crime rating change to the this instance.

### ApplyByKingdomCreation

```csharp
public static void ApplyByKingdomCreation(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by kingdom creation to the this instance.

### ApplyByClaimOnThrone

```csharp
public static void ApplyByClaimOnThrone(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by claim on throne to the this instance.

### ApplyByCallToWarAgreement

```csharp
public static void ApplyByCallToWarAgreement(IFaction faction1, IFaction faction2)
```

**Purpose:** **Purpose:** Applies the effect of by call to war agreement to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
DeclareWarAction.ApplyByKingdomDecision(faction1, faction2);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)