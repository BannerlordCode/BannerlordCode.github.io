---
title: "EndCaptivityAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndCaptivityAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EndCaptivityAction

## Mental Model

Treat `EndCaptivityAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs`

EndCaptivityAction is a set of static methods that trigger "EndCaptivity" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByReleasedAfterBattle

```csharp
public static void ApplyByReleasedAfterBattle(Hero character)
```

**Purpose:** released after battle.

### ApplyByRansom

```csharp
public static void ApplyByRansom(Hero character, Hero facilitator)
```

**Purpose:** ransom.

### ApplyByPeace

```csharp
public static void ApplyByPeace(Hero character, Hero facilitator = null)
```

**Purpose:** peace.

### ApplyByEscape

```csharp
public static void ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)
```

**Purpose:** escape.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero character)
```

**Purpose:** death.

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)
```

**Purpose:** released by choice.

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(Hero character, Hero facilitator = null)
```

**Purpose:** released by choice.

### ApplyByReleasedByCompensation

```csharp
public static void ApplyByReleasedByCompensation(Hero character)
```

**Purpose:** released by compensation.

## Usage Example

```csharp
// Trigger this action from a mod
EndCaptivityAction.ApplyByReleasedAfterBattle(character);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)