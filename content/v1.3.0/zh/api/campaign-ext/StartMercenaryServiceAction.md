---
title: "StartMercenaryServiceAction"
description: "StartMercenaryServiceAction 的自动生成战役动作参考。"
---
# StartMercenaryServiceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartMercenaryServiceAction.cs`

StartMercenaryServiceAction 是一组静态方法，用于在战役中以特定原因触发"StartMercenaryService"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByDefault

```csharp
public static void ApplyByDefault(Clan clan, Kingdom kingdom, int awardMultiplier)
```

**用途 / Purpose:** default。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
StartMercenaryServiceAction.ApplyByDefault(clan, kingdom, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)