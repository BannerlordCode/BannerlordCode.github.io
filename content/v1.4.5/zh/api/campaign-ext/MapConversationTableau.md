---
title: "MapConversationTableau"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapConversationTableau`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationTableau

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableau`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationTableau.cs`

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

**用途 / Purpose:** 设置 `enabled` 的值或状态。

### SetData
`public void SetData(object data)`

**用途 / Purpose:** 设置 `data` 的值或状态。

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 设置 `target size` 的值或状态。

### OnFinalize
`public void OnFinalize(bool clearNextFrame)`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnConversationPlay
`public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**用途 / Purpose:** 当 `conversation play` 事件触发时调用此方法。

### RemovePreviousAgentsSoundEvent
`public void RemovePreviousAgentsSoundEvent()`

**用途 / Purpose:** 从当前集合/状态中移除 `previous agents sound event`。

### StopConversationSoundEvent
`public void StopConversationSoundEvent()`

**用途 / Purpose:** 处理 `stop conversation sound event` 相关逻辑。

## 使用示例

```csharp
var value = new MapConversationTableau();
value.SetEnabled(false);
```

## 参见

- [完整类目录](../catalog)