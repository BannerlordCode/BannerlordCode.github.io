---
title: "BreakInOutBesiegedSettlementAction"
description: "BreakInOutBesiegedSettlementAction 的自动生成战役动作参考。"
---
# BreakInOutBesiegedSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/BreakInOutBesiegedSettlementAction.cs`

BreakInOutBesiegedSettlementAction 是一组静态方法，用于在战役中以特定原因触发"BreakInOutBesiegedSettlement"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyBreakIn

```csharp
public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

**用途 / Purpose:** **用途 / Purpose:** 将 break in 的效果应用到当前对象。

### ApplyBreakOut

```csharp
public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

**用途 / Purpose:** **用途 / Purpose:** 将 break out 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
BreakInOutBesiegedSettlementAction.ApplyBreakIn(casualties, armyCasualtiesCount, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)