<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## 概述

`DeploymentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `DeploymentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerTeam` | `public Team PlayerTeam { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnBattleSideDeployed
`public override void OnBattleSideDeployed(BattleSideEnum side)`

**用途 / Purpose:** 当 `battle side deployed` 事件触发时调用此方法。

### AutoDeployTeamUsingDeploymentPlan
`public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)`

**用途 / Purpose:** 处理 `auto deploy team using deployment plan` 相关逻辑。

### ForceUpdateAllUnits
`public abstract void ForceUpdateAllUnits()`

**用途 / Purpose:** 处理 `force update all units` 相关逻辑。

### FinishDeployment
`public virtual void FinishDeployment()`

**用途 / Purpose:** 处理 `finish deployment` 相关逻辑。

### InitializeDeploymentPoints
`public void InitializeDeploymentPoints()`

**用途 / Purpose:** 初始化 `deployment points` 的状态、资源或绑定。

## 使用示例

```csharp
var implementation = new CustomDeploymentHandler();
```

## 参见

- [完整类目录](../catalog)