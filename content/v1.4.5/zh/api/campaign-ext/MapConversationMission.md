---
title: "MapConversationMission"
description: "MapConversationMission 的自动生成类参考。"
---
# MapConversationMission

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationMission : ICampaignMission`
**Base:** `ICampaignMission`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## 概述

`MapConversationMission` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |

## 主要方法

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**用途 / Purpose:** 处理与 「conversation play args」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapConversationMission 实例
MapConversationMission mapConversationMission = ...;
var result = mapConversationMission.ConversationPlayArgs("example", "example", "example", "example", "example");
```

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**用途 / Purpose:** 为 「conversation tableau」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapConversationMission 实例
MapConversationMission mapConversationMission = ...;
mapConversationMission.SetConversationTableau(tableau);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapConversationMission 实例
MapConversationMission mapConversationMission = ...;
mapConversationMission.Tick(0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapConversationMission 实例
MapConversationMission mapConversationMission = ...;
mapConversationMission.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapConversationMission mapConversationMission = ...;
mapConversationMission.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## 参见

- [本区域目录](../)