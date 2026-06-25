---
title: "MapConversationTableau"
description: "MapConversationTableau 的自动生成类参考。"
---
# MapConversationTableau

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableau`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationTableau.cs`

## 概述

`MapConversationTableau` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## 主要方法

### SetEnabled
`public void SetEnabled(bool enabled)`

**用途 / Purpose:** 为 「enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetEnabled(false);
```

### SetData
`public void SetData(object data)`

**用途 / Purpose:** 为 「data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetData(data);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize(bool clearNextFrame)`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.OnFinalize(false);
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.OnTick(0);
```

### OnConversationPlay
`public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**用途 / Purpose:** 在 「conversation play」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.OnConversationPlay("example", "example", "example", "example", "example");
```

### RemovePreviousAgentsSoundEvent
`public void RemovePreviousAgentsSoundEvent()`

**用途 / Purpose:** 从当前容器或状态中移除 「previous agents sound event」。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.RemovePreviousAgentsSoundEvent();
```

### StopConversationSoundEvent
`public void StopConversationSoundEvent()`

**用途 / Purpose:** 停止「conversation sound event」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapConversationTableau 实例
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.StopConversationSoundEvent();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetEnabled(false);
```

## 参见

- [本区域目录](../)