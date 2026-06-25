---
title: "AddHeroToPartyAction"
description: "AddHeroToPartyAction 的自动生成战役动作参考。"
---
# AddHeroToPartyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/AddHeroToPartyAction.cs`

AddHeroToPartyAction 是一组静态方法，用于在战役中以特定原因触发"AddHeroToParty"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Hero hero, MobileParty party, bool showNotification = true)
```

**用途 / Purpose:** 。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
AddHeroToPartyAction.Apply(hero, party, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)