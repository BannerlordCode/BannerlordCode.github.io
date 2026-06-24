<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ReferenceMBEvent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ReferenceMBEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ReferenceMBEvent<T1> : ReferenceIMBEvent<T1>, IMbEventBase`
**Base:** `ReferenceIMBEvent<T1>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ReferenceMBEvent.cs`

## 概述

`ReferenceMBEvent` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, ReferenceAction<T1> action)`

**用途 / Purpose:** 向当前集合/状态中添加 `non serialized listener`。

### Invoke
`public void Invoke(ref T1 t1)`

**用途 / Purpose:** 处理 `invoke` 相关逻辑。

### ClearListeners
`public void ClearListeners(object o)`

**用途 / Purpose:** 处理 `clear listeners` 相关逻辑。

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, ReferenceAction<T1, T2> action)`

**用途 / Purpose:** 向当前集合/状态中添加 `non serialized listener`。

### Invoke
`public void Invoke(T1 t1, ref T2 t2)`

**用途 / Purpose:** 处理 `invoke` 相关逻辑。

### ClearListeners
`public void ClearListeners(object o)`

**用途 / Purpose:** 处理 `clear listeners` 相关逻辑。

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, ReferenceAction<T1, T2, T3> action)`

**用途 / Purpose:** 向当前集合/状态中添加 `non serialized listener`。

### Invoke
`public void Invoke(T1 t1, T2 t2, ref T3 t3)`

**用途 / Purpose:** 处理 `invoke` 相关逻辑。

### ClearListeners
`public void ClearListeners(object o)`

**用途 / Purpose:** 处理 `clear listeners` 相关逻辑。

## 使用示例

```csharp
var value = new ReferenceMBEvent();
value.AddNonSerializedListener(owner, action);
```

## 参见

- [完整类目录](../catalog)