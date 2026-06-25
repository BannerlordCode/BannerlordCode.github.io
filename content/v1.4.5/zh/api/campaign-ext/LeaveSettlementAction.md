---
title: "LeaveSettlementAction"
description: "LeaveSettlementAction 的自动生成战役动作参考。"
---
# LeaveSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/LeaveSettlementAction.cs`

LeaveSettlementAction 是一组静态方法，用于在战役中以特定原因触发"LeaveSettlement"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty)
```

**用途 / Purpose:** 将 for party 的效果应用到当前对象。

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero)
```

**用途 / Purpose:** 将 for character only 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
LeaveSettlementAction.ApplyForParty(mobileParty);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)