---
title: "TeleportHeroAction"
description: "TeleportHeroAction 的自动生成战役动作参考。"
---
# TeleportHeroAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TeleportHeroAction.cs`

TeleportHeroAction 是一组静态方法，用于在战役中以特定原因触发"TeleportHero"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyImmediateTeleportToSettlement

```csharp
public static void ApplyImmediateTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**用途 / Purpose:** 将 immediate teleport to settlement 的效果应用到当前对象。

### ApplyImmediateTeleportToParty

```csharp
public static void ApplyImmediateTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** 将 immediate teleport to party 的效果应用到当前对象。

### ApplyImmediateTeleportToPartyAsPartyLeader

```csharp
public static void ApplyImmediateTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** 将 immediate teleport to party as party leader 的效果应用到当前对象。

### ApplyDelayedTeleportToSettlement

```csharp
public static void ApplyDelayedTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**用途 / Purpose:** 将 delayed teleport to settlement 的效果应用到当前对象。

### ApplyDelayedTeleportToParty

```csharp
public static void ApplyDelayedTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** 将 delayed teleport to party 的效果应用到当前对象。

### ApplyDelayedTeleportToSettlementAsGovernor

```csharp
public static void ApplyDelayedTeleportToSettlementAsGovernor(Hero heroToBeMoved, Settlement targetSettlement)
```

**用途 / Purpose:** 将 delayed teleport to settlement as governor 的效果应用到当前对象。

### ApplyDelayedTeleportToPartyAsPartyLeader

```csharp
public static void ApplyDelayedTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** 将 delayed teleport to party as party leader 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
TeleportHeroAction.ApplyImmediateTeleportToSettlement(heroToBeMoved, targetSettlement);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)