<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentLockVisualizerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentLockVisualizerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLockVisualizerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentLockVisualizerVM.cs`

## 概述

`MissionAgentLockVisualizerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllTrackedAgents` | `public MBBindingList<MissionAgentLockItemVM> AllTrackedAgents { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### OnActiveLockAgentChange
`public void OnActiveLockAgentChange(Agent oldAgent, Agent newAgent)`

**用途 / Purpose:** 当 `active lock agent change` 事件触发时调用此方法。

### OnPossibleLockAgentChange
`public void OnPossibleLockAgentChange(Agent oldPossibleAgent, Agent newPossibleAgent)`

**用途 / Purpose:** 当 `possible lock agent change` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionAgentLockVisualizerVM();
value.OnActiveLockAgentChange(oldAgent, newAgent);
```

## 参见

- [完整类目录](../catalog)