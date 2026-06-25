---
title: "DeclareWarAction"
description: "DeclareWarAction 的自动生成战役动作参考。"
---
# DeclareWarAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`

DeclareWarAction 是一组静态方法，用于在战役中以特定原因触发"DeclareWar"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by kingdom decision 的效果应用到当前对象。

### ApplyByDefault

```csharp
public static void ApplyByDefault(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by default 的效果应用到当前对象。

### ApplyByPlayerHostility

```csharp
public static void ApplyByPlayerHostility(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by player hostility 的效果应用到当前对象。

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by rebellion 的效果应用到当前对象。

### ApplyByCrimeRatingChange

```csharp
public static void ApplyByCrimeRatingChange(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by crime rating change 的效果应用到当前对象。

### ApplyByKingdomCreation

```csharp
public static void ApplyByKingdomCreation(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by kingdom creation 的效果应用到当前对象。

### ApplyByClaimOnThrone

```csharp
public static void ApplyByClaimOnThrone(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by claim on throne 的效果应用到当前对象。

### ApplyByCallToWarAgreement

```csharp
public static void ApplyByCallToWarAgreement(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 将 by call to war agreement 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DeclareWarAction.ApplyByKingdomDecision(faction1, faction2);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)