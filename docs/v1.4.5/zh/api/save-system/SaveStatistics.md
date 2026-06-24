<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveStatistics`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SaveStatistics

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct SaveStatistics`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/LegacySaveContext.cs`

## 概述

`SaveStatistics` 位于 `TaleWorlds.SaveSystem.Save`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SaveStatistics
`public struct SaveStatistics(Dictionary<string, (int, int, int, long)> typeStatistics, Dictionary<string, (int, int, int, int, long)> containerStatistics)`

**用途 / Purpose:** 保存 `statistics` 数据。

### GetContainerSize
`public long GetContainerSize(string key)`

**用途 / Purpose:** 获取 `container size` 的当前值。

### GetTypeKeys
`public List<string> GetTypeKeys()`

**用途 / Purpose:** 获取 `type keys` 的当前值。

### GetContainerKeys
`public List<string> GetContainerKeys()`

**用途 / Purpose:** 获取 `container keys` 的当前值。

## 使用示例

```csharp
var value = new SaveStatistics();
value.SaveStatistics(dictionary<string, (int, 0, 0, 0, dictionary<string, (int, 0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)