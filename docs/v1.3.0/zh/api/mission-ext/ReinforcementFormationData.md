<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ReinforcementFormationData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ReinforcementFormationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

`ReinforcementFormationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ReinforcementFormationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**用途 / Purpose:** 向当前集合/状态中添加 `prospective troop`。

### IsInitialized
`public bool IsInitialized(uint initTime)`

**用途 / Purpose:** 处理 `is initialized` 相关逻辑。

### GetPriority
`public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**用途 / Purpose:** 获取 `priority` 的当前值。

## 使用示例

```csharp
var value = new ReinforcementFormationData();
```

## 参见

- [完整类目录](../catalog)