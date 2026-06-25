---
title: "MarriageAction"
description: "MarriageAction 的自动生成战役动作参考。"
---
# MarriageAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MarriageAction.cs`

MarriageAction 是一组静态方法，用于在战役中以特定原因触发"Marriage"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
MarriageAction.Apply(firstHero, secondHero, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)