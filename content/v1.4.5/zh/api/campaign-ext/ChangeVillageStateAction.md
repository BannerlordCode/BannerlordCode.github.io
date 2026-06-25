---
title: "ChangeVillageStateAction"
description: "ChangeVillageStateAction 的自动生成战役动作参考。"
---
# ChangeVillageStateAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeVillageStateAction.cs`

ChangeVillageStateAction 是一组静态方法，用于在战役中以特定原因触发"ChangeVillageState"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyBySettingToNormal

```csharp
public static void ApplyBySettingToNormal(Settlement settlement)
```

**用途 / Purpose:** setting to normal。

### ApplyBySettingToBeingRaided

```csharp
public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)
```

**用途 / Purpose:** setting to being raided。

### ApplyBySettingToBeingForcedForSupplies

```csharp
public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)
```

**用途 / Purpose:** setting to being forced for supplies。

### ApplyBySettingToBeingForcedForVolunteers

```csharp
public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)
```

**用途 / Purpose:** setting to being forced for volunteers。

### ApplyBySettingToLooted

```csharp
public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)
```

**用途 / Purpose:** setting to looted。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeVillageStateAction.ApplyBySettingToNormal(settlement);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)