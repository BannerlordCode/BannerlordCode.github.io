---
title: "ChangeProductionTypeOfWorkshopAction"
description: "ChangeProductionTypeOfWorkshopAction 的自动生成战役动作参考。"
---
# ChangeProductionTypeOfWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeProductionTypeOfWorkshopAction.cs`

ChangeProductionTypeOfWorkshopAction 是一组静态方法，用于在战役中以特定原因触发"ChangeProductionTypeOfWorkshop"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Workshop workshop, WorkshopType newWorkshopType, bool ignoreCost = false)
```

**用途 / Purpose:** 。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeProductionTypeOfWorkshopAction.Apply(workshop, newWorkshopType, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)