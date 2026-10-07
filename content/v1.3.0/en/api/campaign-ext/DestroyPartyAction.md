---
title: "DestroyPartyAction"
description: "Auto-generated campaign action reference for DestroyPartyAction."
---
# DestroyPartyAction

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyPartyAction.cs`

DestroyPartyAction is a set of static methods that trigger "DestroyParty" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase destroyerParty, MobileParty destroyedParty)
```

**Purpose:** Applies the this instance's effect to its target.

### ApplyForDisbanding

```csharp
public static void ApplyForDisbanding(MobileParty disbandedParty, Settlement relatedSettlement)
```

**Purpose:** Applies the effect of for disbanding to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyPartyAction.Apply(destroyerParty, destroyedParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)