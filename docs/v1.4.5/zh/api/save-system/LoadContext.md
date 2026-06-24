<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LoadContext

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadContext`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadContext.cs`

## 概述

`LoadContext` 位于 `TaleWorlds.SaveSystem.Load`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Load` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `Driver` | `public ISaveDriver Driver { get; }` |

## 主要方法

### Load
`public bool Load(LoadData loadData, bool loadAsLateInitialize)`

**用途 / Purpose:** 加载 `load` 数据。

### TryConvertType
`public static bool TryConvertType(Type sourceType, Type targetType, ref object data)`

**用途 / Purpose:** 尝试获取 `convert type`，通常以 out 参数返回结果。

### GetObjectWithId
`public ObjectHeaderLoadData GetObjectWithId(int id)`

**用途 / Purpose:** 获取 `object with id` 的当前值。

### GetContainerWithId
`public ContainerHeaderLoadData GetContainerWithId(int id)`

**用途 / Purpose:** 获取 `container with id` 的当前值。

### GetStringWithId
`public string GetStringWithId(int id)`

**用途 / Purpose:** 获取 `string with id` 的当前值。

## 使用示例

```csharp
var value = new LoadContext();
value.Load(loadData, false);
```

## 参见

- [完整类目录](../catalog)