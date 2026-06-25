---
title: "TakePrisonerAction"
description: "TakePrisonerAction 的自动生成战役动作参考。"
---
# TakePrisonerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/TakePrisonerAction.cs`

TakePrisonerAction 是一组静态方法，用于在战役中以特定原因触发"TakePrisoner"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的效果应用到目标。

### ApplyByTakenFromPartyScreen

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by taken from party screen 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
TakePrisonerAction.Apply(capturerParty, prisonerCharacter);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)