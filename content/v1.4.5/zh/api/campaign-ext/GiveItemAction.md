---
title: "GiveItemAction"
description: "GiveItemAction 的自动生成战役动作参考。"
---
# GiveItemAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GiveItemAction.cs`

GiveItemAction 是一组静态方法，用于在战役中以特定原因触发"GiveItem"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForHeroes

```csharp
public static void ApplyForHeroes(Hero giver, Hero receiver, in ItemRosterElement itemRosterElement)
```

**用途 / Purpose:** 将 for heroes 的效果应用到当前对象。

### ApplyForParties

```csharp
public static void ApplyForParties(PartyBase giverParty, PartyBase receiverParty, in ItemRosterElement itemRosterElement)
```

**用途 / Purpose:** 将 for parties 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GiveItemAction.ApplyForHeroes(giver, receiver, itemRosterElement);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)