---
title: "ChangeClanInfluenceAction"
description: "ChangeClanInfluenceAction 的自动生成战役动作参考。"
---
# ChangeClanInfluenceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanInfluenceAction.cs`

ChangeClanInfluenceAction 是一组静态方法，用于在战役中以特定原因触发"ChangeClanInfluence"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Clan clan, float amount)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeClanInfluenceAction.Apply(clan, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)