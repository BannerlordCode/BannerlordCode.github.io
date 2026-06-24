<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapConversationMission`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationMission

**命名空间:** SandBox.View.Map
**模块:** SandBox.View
**类型:** `public class MapConversationMission : ICampaignMission`
**Base:** `ICampaignMission`
**领域:** campaign-ext

## 概述

`MapConversationMission` 位于 `SandBox.View.Map`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; set; }` |

## 主要方法

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**用途 / Purpose:** 处理 `conversation play args` 相关逻辑。

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**用途 / Purpose:** 设置 `conversation tableau` 的值或状态。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 MapConversationMission 实例，再调用它的公开方法
var value = new MapConversationMission();
value.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
