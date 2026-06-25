---
title: "PayForCrimeAction"
description: "PayForCrimeAction 的自动生成战役动作参考。"
---
# PayForCrimeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/PayForCrimeAction.cs`

PayForCrimeAction 是一组静态方法，用于在战役中以特定原因触发"PayForCrime"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### GetClearCrimeCost

```csharp
public static float GetClearCrimeCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod)
```

**用途 / Purpose:** 读取并返回当前对象中 clear crime cost 的结果。

### Apply

```csharp
public static void Apply(IFaction faction, CrimeModel.PaymentMethod paymentMethod)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
PayForCrimeAction.GetClearCrimeCost(faction, paymentMethod);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)