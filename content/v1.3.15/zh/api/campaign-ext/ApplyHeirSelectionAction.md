---
title: "ApplyHeirSelectionAction"
description: "ApplyHeirSelectionAction 的自动生成战役动作参考。"
---
# ApplyHeirSelectionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ApplyHeirSelectionAction.cs`

ApplyHeirSelectionAction 是一组静态方法，用于在战役中以特定原因触发"ApplyHeirSelection"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero heir)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by death 的效果应用到当前对象。

### ApplyByRetirement

```csharp
public static void ApplyByRetirement(Hero heir)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by retirement 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ApplyHeirSelectionAction.ApplyByDeath(heir);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)