---
title: "DestroyClanAction"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DestroyClanAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DestroyClanAction

## 心智模型

先把 `DestroyClanAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyClanAction.cs`

DestroyClanAction 是一组静态方法，用于在战役中以特定原因触发"DestroyClan"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Clan destroyedClan)
```

**用途 / Purpose:** 执行此入口。

### ApplyByFailedRebellion

```csharp
public static void ApplyByFailedRebellion(Clan failedRebellionClan)
```

**用途 / Purpose:** failed rebellion。

### ApplyByClanLeaderDeath

```csharp
public static void ApplyByClanLeaderDeath(Clan destroyedClan)
```

**用途 / Purpose:** clan leader death。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DestroyClanAction.Apply(destroyedClan);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)