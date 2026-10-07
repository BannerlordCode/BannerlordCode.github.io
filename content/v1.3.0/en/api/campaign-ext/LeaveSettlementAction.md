---
title: "LeaveSettlementAction"
description: "Auto-generated campaign action reference for LeaveSettlementAction."
---
# LeaveSettlementAction

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/LeaveSettlementAction.cs`

LeaveSettlementAction is a set of static methods that trigger "LeaveSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty)
```

**Purpose:** Applies the effect of for party to the this instance.

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero)
```

**Purpose:** Applies the effect of for character only to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
LeaveSettlementAction.ApplyForParty(mobileParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)