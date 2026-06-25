---
title: "AssemblyLoadResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AssemblyLoadResult`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AssemblyLoadResult

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public enum AssemblyLoadResult`
**领域:** core-extra

## 概述

`AssemblyLoadResult` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Success` |
| `LoadedWithErrors` |

## 使用示例

```csharp
AssemblyLoadResult example = AssemblyLoadResult.Success;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
