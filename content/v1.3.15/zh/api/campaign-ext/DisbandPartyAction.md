---
title: "DisbandPartyAction"
description: "DisbandPartyAction 的自动生成战役动作参考。"
---
# DisbandPartyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DisbandPartyAction.cs`

DisbandPartyAction 是一组静态方法，用于在战役中以特定原因触发"DisbandParty"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### StartDisband

```csharp
public static void StartDisband(MobileParty disbandParty)
```

**用途 / Purpose:** 启动disband流程或状态机。

### CancelDisband

```csharp
public static void CancelDisband(MobileParty disbandParty)
```

**用途 / Purpose:** 检查当前对象是否满足 cel disband 的前置条件。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DisbandPartyAction.StartDisband(disbandParty);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)