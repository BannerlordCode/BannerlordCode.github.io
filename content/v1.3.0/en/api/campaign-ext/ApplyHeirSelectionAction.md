---
title: "ApplyHeirSelectionAction"
description: "Auto-generated campaign action reference for ApplyHeirSelectionAction."
---
# ApplyHeirSelectionAction

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ApplyHeirSelectionAction.cs`

ApplyHeirSelectionAction is a set of static methods that trigger "ApplyHeirSelection" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero heir)
```

**Purpose:** Applies the effect of by death to the this instance.

### ApplyByRetirement

```csharp
public static void ApplyByRetirement(Hero heir)
```

**Purpose:** Applies the effect of by retirement to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ApplyHeirSelectionAction.ApplyByDeath(heir);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)