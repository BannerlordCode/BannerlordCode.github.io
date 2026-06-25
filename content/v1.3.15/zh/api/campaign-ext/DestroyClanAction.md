---
title: "DestroyClanAction"
description: "DestroyClanAction 的自动生成战役动作参考。"
---
# DestroyClanAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyClanAction.cs`

DestroyClanAction 是一组静态方法，用于在战役中以特定原因触发"DestroyClan"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Clan destroyedClan)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

### ApplyByFailedRebellion

```csharp
public static void ApplyByFailedRebellion(Clan failedRebellionClan)
```

**用途 / Purpose:** 将 by failed rebellion 的效果应用到当前对象。

### ApplyByClanLeaderDeath

```csharp
public static void ApplyByClanLeaderDeath(Clan destroyedClan)
```

**用途 / Purpose:** 将 by clan leader death 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DestroyClanAction.Apply(destroyedClan);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)