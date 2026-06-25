---
title: "DestroyShipAction"
description: "DestroyShipAction 的自动生成战役动作参考。"
---
# DestroyShipAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyShipAction.cs`

DestroyShipAction 是一组静态方法，用于在战役中以特定原因触发"DestroyShip"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Ship ship)
```

**用途 / Purpose:** 。

### ApplyByDiscard

```csharp
public static void ApplyByDiscard(Ship ship)
```

**用途 / Purpose:** discard。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DestroyShipAction.Apply(ship);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)