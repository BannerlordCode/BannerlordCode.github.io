---
title: "MakePeaceAction"
description: "MakePeaceAction 的自动生成战役动作参考。"
---
# MakePeaceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MakePeaceAction.cs`

MakePeaceAction 是一组静态方法，用于在战役中以特定原因触发"MakePeace"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** 。

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2, int dailyTributeDuration)
```

**用途 / Purpose:** kingdom decision。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
MakePeaceAction.Apply(faction1, faction2);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)