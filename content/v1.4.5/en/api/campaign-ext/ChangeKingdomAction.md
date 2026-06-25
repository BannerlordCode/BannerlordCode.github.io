---
title: "ChangeKingdomAction"
description: "Auto-generated campaign action reference for ChangeKingdomAction."
---
# ChangeKingdomAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

ChangeKingdomAction is a set of static methods that trigger "ChangeKingdom" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByJoinToKingdom

```csharp
public static void ApplyByJoinToKingdom(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**Purpose:** Applies the effect of by join to kingdom to the this instance.

### ApplyByJoinToKingdomByDefection

```csharp
public static void ApplyByJoinToKingdomByDefection(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**Purpose:** Applies the effect of by join to kingdom by defection to the this instance.

### ApplyByCreateKingdom

```csharp
public static void ApplyByCreateKingdom(Clan clan, Kingdom newKingdom, bool showNotification = true)
```

**Purpose:** Applies the effect of by create kingdom to the this instance.

### ApplyByLeaveByKingdomDestruction

```csharp
public static void ApplyByLeaveByKingdomDestruction(Clan clan, bool showNotification = true)
```

**Purpose:** Applies the effect of by leave by kingdom destruction to the this instance.

### ApplyByLeaveKingdom

```csharp
public static void ApplyByLeaveKingdom(Clan clan, bool showNotification = true)
```

**Purpose:** Applies the effect of by leave kingdom to the this instance.

### ApplyByLeaveWithRebellionAgainstKingdom

```csharp
public static void ApplyByLeaveWithRebellionAgainstKingdom(Clan clan, bool showNotification = true)
```

**Purpose:** Applies the effect of by leave with rebellion against kingdom to the this instance.

### ApplyByJoinFactionAsMercenary

```csharp
public static void ApplyByJoinFactionAsMercenary(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), int awardMultiplier = 50, bool showNotification = true)
```

**Purpose:** Applies the effect of by join faction as mercenary to the this instance.

### ApplyByLeaveKingdomAsMercenary

```csharp
public static void ApplyByLeaveKingdomAsMercenary(Clan mercenaryClan, bool showNotification = true)
```

**Purpose:** Applies the effect of by leave kingdom as mercenary to the this instance.

### ApplyByLeaveKingdomByClanDestruction

```csharp
public static void ApplyByLeaveKingdomByClanDestruction(Clan clan, bool showNotification = true)
```

**Purpose:** Applies the effect of by leave kingdom by clan destruction to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom, default(CampaignTime), false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)