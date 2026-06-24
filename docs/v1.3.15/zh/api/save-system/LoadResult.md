<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadResult`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadResult

**命名空间:** TaleWorlds.SaveSystem.Load
**模块:** TaleWorlds.SaveSystem
**类型:** `public class LoadResult`
**领域:** save-system

## 概述

`LoadResult` 位于 `TaleWorlds.SaveSystem.Load`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Load` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Root` | `public object Root { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `Errors` | `public LoadError Errors { get; }` |
| `MetaData` | `public MetaData MetaData { get; }` |

## 主要方法

### InitializeObjects
`public void InitializeObjects()`

**用途 / Purpose:** 初始化 `objects` 的状态、资源或绑定。

### AfterInitializeObjects
`public void AfterInitializeObjects()`

**用途 / Purpose:** 处理 `after initialize objects` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 LoadResult 实例，再调用它的公开方法
var value = new LoadResult();
value.InitializeObjects();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
