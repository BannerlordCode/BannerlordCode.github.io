---
title: "MissionAgentAlarmStateVM"
description: "MissionAgentAlarmStateVM 的自动生成类参考。"
---
# MissionAgentAlarmStateVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmStateVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionAgentAlarmStateVM.cs`

## 概述

`MissionAgentAlarmStateVM` 位于 `SandBox.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Targets` | `public MBBindingList<MissionAgentAlarmTargetVM> Targets { get; set; }` |
| `IsMainAgentInSafeArea` | `public bool IsMainAgentInSafeArea { get; set; }` |

## 主要方法

### Initialize
`public void Initialize(Mission mission, Camera camera)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmStateVM 实例
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.Initialize(mission, camera);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmStateVM 实例
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnFinalize();
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmStateVM 实例
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.Update();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmStateVM 实例
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnAgentRemoved(agent);
```

### OnAgentBuild
`public void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmStateVM 实例
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 在 「agent team changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmStateVM 实例
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.Initialize(mission, camera);
```

## 参见

- [本区域目录](../)