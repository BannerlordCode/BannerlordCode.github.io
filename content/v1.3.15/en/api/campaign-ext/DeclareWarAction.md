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

**Purpose:** kingdom decision.

### ApplyByDefault

```csharp
public static void ApplyByDefault(IFaction faction1, IFaction faction2)
```

**Purpose:** default.

### ApplyByPlayerHostility

```csharp
public static void ApplyByPlayerHostility(IFaction faction1, IFaction faction2)
```

**Purpose:** player hostility.

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(IFaction faction1, IFaction faction2)
```

**Purpose:** rebellion.

### ApplyByCrimeRatingChange

```csharp
public static void ApplyByCrimeRatingChange(IFaction faction1, IFaction faction2)
```

**Purpose:** crime rating change.

### ApplyByKingdomCreation

```csharp
public static void ApplyByKingdomCreation(IFaction faction1, IFaction faction2)
```

**Purpose:** kingdom creation.

### ApplyByClaimOnThrone

```csharp
public static void ApplyByClaimOnThrone(IFaction faction1, IFaction faction2)
```

**Purpose:** claim on throne.

### ApplyByCallToWarAgreement

```csharp
public static void ApplyByCallToWarAgreement(IFaction faction1, IFaction faction2)
```

**Purpose:** call to war agreement.

## Usage Example

```csharp
// Trigger this action from a mod
DeclareWarAction.ApplyByKingdomDecision(faction1, faction2);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)