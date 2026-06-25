---
title: "ChangeClanLeaderAction"
description: "ChangeClanLeaderAction 的自动生成战役动作参考。"
---
# ChangeClanLeaderAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanLeaderAction.cs`

ChangeClanLeaderAction 是一组静态方法，用于在战役中以特定原因触发"ChangeClanLeader"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyWithSelectedNewLeader

```csharp
public static void ApplyWithSelectedNewLeader(Clan clan, Hero newLeader)
```

**用途 / Purpose:** with selected new leader。

### ApplyWithoutSelectedNewLeader

```csharp
public static void ApplyWithoutSelectedNewLeader(Clan clan)
```

**用途 / Purpose:** without selected new leader。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeClanLeaderAction.ApplyWithSelectedNewLeader(clan, newLeader);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)