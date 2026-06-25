---
title: "EndMercenaryServiceAction"
description: "EndMercenaryServiceAction 的自动生成战役动作参考。"
---
# EndMercenaryServiceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

EndMercenaryServiceAction 是一组静态方法，用于在战役中以特定原因触发"EndMercenaryService"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### EndByDefault

```csharp
public static void EndByDefault(Clan clan)
```

**用途 / Purpose:** **用途 / Purpose:** 调用 EndByDefault 对应的操作。

### EndByLeavingKingdom

```csharp
public static void EndByLeavingKingdom(Clan clan)
```

**用途 / Purpose:** **用途 / Purpose:** 调用 EndByLeavingKingdom 对应的操作。

### EndByBecomingVassal

```csharp
public static void EndByBecomingVassal(Clan clan)
```

**用途 / Purpose:** **用途 / Purpose:** 调用 EndByBecomingVassal 对应的操作。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
EndMercenaryServiceAction.EndByDefault(clan);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)