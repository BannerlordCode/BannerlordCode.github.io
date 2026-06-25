---
title: "SandboxMissionBattleScoreContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxMissionBattleScoreContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxMissionBattleScoreContext

**Namespace:** SandBox.Missions.BattleScore
**Module:** SandBox.Missions
**Type:** `public class SandboxMissionBattleScoreContext : BattleScoreContext`
**Base:** `BattleScoreContext`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.BattleScore/SandboxMissionBattleScoreContext.cs`

## 概述

`SandboxMissionBattleScoreContext` 位于 `SandBox.Missions.BattleScore`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.BattleScore` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetAttackerBanner
`public override Banner GetAttackerBanner()`

**用途 / Purpose:** 获取 `attacker banner` 的当前值。

### GetDefenderBanner
`public override Banner GetDefenderBanner()`

**用途 / Purpose:** 获取 `defender banner` 的当前值。

## 使用示例

```csharp
var value = new SandboxMissionBattleScoreContext();
value.GetAttackerBanner();
```

## 参见

- [完整类目录](../catalog)