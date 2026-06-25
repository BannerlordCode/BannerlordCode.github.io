---
title: "BannerBearerCondition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBearerCondition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBearerCondition

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerCondition : MPPerkCondition`
**Base:** `MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs`

## 概述

`BannerBearerCondition` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsPeerCondition` | `public override bool IsPeerCondition { get; }` |

## 主要方法

### Check
`public override bool Check(MissionPeer peer)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

### Check
`public override bool Check(Agent agent)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

## 使用示例

```csharp
var value = new BannerBearerCondition();
value.Check(peer);
```

## 参见

- [完整类目录](../catalog)