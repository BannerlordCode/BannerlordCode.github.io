---
title: "ChangeRelationAction"
description: "ChangeRelationAction 的自动生成战役动作参考。"
---
# ChangeRelationAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs`

ChangeRelationAction 是一组静态方法，用于在战役中以特定原因触发"ChangeRelation"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyPlayerRelation

```csharp
public static void ApplyPlayerRelation(Hero gainedRelationWith, int relation, bool affectRelatives = true, bool showQuickNotification = true)
```

**用途 / Purpose:** 将 player relation 的效果应用到当前对象。

### ApplyRelationChangeBetweenHeroes

```csharp
public static void ApplyRelationChangeBetweenHeroes(Hero hero, Hero gainedRelationWith, int relationChange, bool showQuickNotification = true)
```

**用途 / Purpose:** 将 relation change between heroes 的效果应用到当前对象。

### ApplyEmissaryRelation

```csharp
public static void ApplyEmissaryRelation(Hero emissary, Hero gainedRelationWith, int relationChange, bool showQuickNotification = true)
```

**用途 / Purpose:** 将 emissary relation 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeRelationAction.ApplyPlayerRelation(gainedRelationWith, 100, false, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)