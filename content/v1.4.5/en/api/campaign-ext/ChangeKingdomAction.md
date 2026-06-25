---
title: "ChangeKingdomAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeKingdomAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeKingdomAction

## Mental Model

Treat `ChangeKingdomAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

ChangeKingdomAction is a set of static methods that trigger "ChangeKingdom" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByJoinToKingdom

```csharp
public static void ApplyByJoinToKingdom(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**Purpose:** join to kingdom.

### ApplyByJoinToKingdomByDefection

```csharp
public static void ApplyByJoinToKingdomByDefection(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**Purpose:** join to kingdom by defection.

### ApplyByCreateKingdom

```csharp
public static void ApplyByCreateKingdom(Clan clan, Kingdom newKingdom, bool showNotification = true)
```

**Purpose:** create kingdom.

### ApplyByLeaveByKingdomDestruction

```csharp
public static void ApplyByLeaveByKingdomDestruction(Clan clan, bool showNotification = true)
```

**Purpose:** leave by kingdom destruction.

### ApplyByLeaveKingdom

```csharp
public static void ApplyByLeaveKingdom(Clan clan, bool showNotification = true)
```

**Purpose:** leave kingdom.

### ApplyByLeaveWithRebellionAgainstKingdom

```csharp
public static void ApplyByLeaveWithRebellionAgainstKingdom(Clan clan, bool showNotification = true)
```

**Purpose:** leave with rebellion against kingdom.

### ApplyByJoinFactionAsMercenary

```csharp
public static void ApplyByJoinFactionAsMercenary(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), int awardMultiplier = 50, bool showNotification = true)
```

**Purpose:** join faction as mercenary.

### ApplyByLeaveKingdomAsMercenary

```csharp
public static void ApplyByLeaveKingdomAsMercenary(Clan mercenaryClan, bool showNotification = true)
```

**Purpose:** leave kingdom as mercenary.

### ApplyByLeaveKingdomByClanDestruction

```csharp
public static void ApplyByLeaveKingdomByClanDestruction(Clan clan, bool showNotification = true)
```

**Purpose:** leave kingdom by clan destruction.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom, default(CampaignTime), false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)