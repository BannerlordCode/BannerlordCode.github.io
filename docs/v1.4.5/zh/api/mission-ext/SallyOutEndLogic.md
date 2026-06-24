<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SallyOutEndLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SallyOutEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutEndLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## 概述

`SallyOutEndLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `SallyOutEndLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSallyOutOver` | `public bool IsSallyOutOver { get; }` |

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 处理 `mission ended` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new SallyOutEndLogic());
```

## 参见

- [完整类目录](../catalog)