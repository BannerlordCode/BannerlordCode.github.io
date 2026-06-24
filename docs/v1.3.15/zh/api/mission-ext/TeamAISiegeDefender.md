<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamAISiegeDefender`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamAISiegeDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAISiegeDefender : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs`

## 概述

`TeamAISiegeDefender` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ArcherPositions` | `public List<ArcherPosition> ArcherPositions { get; }` |

## 主要方法

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**用途 / Purpose:** 当 `unit added to formation for the first time` 事件触发时调用此方法。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new TeamAISiegeDefender();
value.OnUnitAddedToFormationForTheFirstTime(formation);
```

## 参见

- [完整类目录](../catalog)