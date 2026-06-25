---
title: "ChangeGovernorAction"
description: "ChangeGovernorAction 的自动生成战役动作参考。"
---
# ChangeGovernorAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeGovernorAction.cs`

ChangeGovernorAction 是一组静态方法，用于在战役中以特定原因触发"ChangeGovernor"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Town fortification, Hero governor)
```

**用途 / Purpose:** 。

### RemoveGovernorOf

```csharp
public static void RemoveGovernorOf(Hero governor)
```

**用途 / Purpose:** remove governor of。

### RemoveGovernorOfIfExists

```csharp
public static void RemoveGovernorOfIfExists(Town town)
```

**用途 / Purpose:** remove governor of if exists。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeGovernorAction.Apply(fortification, governor);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)