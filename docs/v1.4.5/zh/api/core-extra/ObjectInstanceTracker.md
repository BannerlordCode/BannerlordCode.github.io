<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ObjectInstanceTracker`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ObjectInstanceTracker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ObjectInstanceTracker`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ObjectInstanceTracker.cs`

## 概述

`ObjectInstanceTracker` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterTrackedInstance
`public static void RegisterTrackedInstance(string name, WeakReference instance)`

**用途 / Purpose:** 处理 `register tracked instance` 相关逻辑。

### CheckBlacklistedTypeCounts
`public static bool CheckBlacklistedTypeCounts(Dictionary<string, int> typeNameCounts, ref string outputLog)`

**用途 / Purpose:** 处理 `check blacklisted type counts` 相关逻辑。

## 使用示例

```csharp
ObjectInstanceTracker.RegisterTrackedInstance("example", instance);
```

## 参见

- [完整类目录](../catalog)