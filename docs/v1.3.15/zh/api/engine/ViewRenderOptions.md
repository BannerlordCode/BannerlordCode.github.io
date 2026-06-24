<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewRenderOptions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ViewRenderOptions

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public enum ViewRenderOptions`
**领域:** engine

## 概述

`ViewRenderOptions` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `ClearColor` |

## 使用示例

```csharp
ViewRenderOptions example = ViewRenderOptions.ClearColor;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
