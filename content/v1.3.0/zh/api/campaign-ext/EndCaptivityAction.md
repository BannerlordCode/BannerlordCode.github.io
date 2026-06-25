---
title: "EndCaptivityAction"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EndCaptivityAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EndCaptivityAction

## 心智模型

先把 `EndCaptivityAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs`

EndCaptivityAction 是一组静态方法，用于在战役中以特定原因触发"EndCaptivity"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByReleasedAfterBattle

```csharp
public static void ApplyByReleasedAfterBattle(Hero character)
```

**用途 / Purpose:** released after battle。

### ApplyByRansom

```csharp
public static void ApplyByRansom(Hero character, Hero facilitator)
```

**用途 / Purpose:** ransom。

### ApplyByPeace

```csharp
public static void ApplyByPeace(Hero character, Hero facilitator = null)
```

**用途 / Purpose:** peace。

### ApplyByEscape

```csharp
public static void ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)
```

**用途 / Purpose:** escape。

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero character)
```

**用途 / Purpose:** death。

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)
```

**用途 / Purpose:** released by choice。

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(Hero character, Hero facilitator = null)
```

**用途 / Purpose:** released by choice。

### ApplyByReleasedByCompensation

```csharp
public static void ApplyByReleasedByCompensation(Hero character)
```

**用途 / Purpose:** released by compensation。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
EndCaptivityAction.ApplyByReleasedAfterBattle(character);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)