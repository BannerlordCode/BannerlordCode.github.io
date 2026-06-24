<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## 概述

`DeploymentMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `DeploymentMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TeamSetupOver` | `public bool TeamSetupOver { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### FinishDeployment
`public void FinishDeployment()`

**用途 / Purpose:** 处理 `finish deployment` 相关逻辑。

### OnAgentControllerSetToPlayer
`public override void OnAgentControllerSetToPlayer(Agent agent)`

**用途 / Purpose:** 当 `agent controller set to player` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomDeploymentMissionController();
```

## 参见

- [完整类目录](../catalog)