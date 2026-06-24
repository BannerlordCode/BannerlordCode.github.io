<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiThreadedTestFunctions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiThreadedTestFunctions

**命名空间:** TaleWorlds.MountAndBlade.View.Screens.Scripts
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MultiThreadedTestFunctions`
**领域:** mission-ext

## 概述

`MultiThreadedTestFunctions` 位于 `TaleWorlds.MountAndBlade.View.Screens.Scripts`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens.Scripts` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MeshMerger
`public static void MeshMerger(InputLayout layout)`

**用途 / Purpose:** 处理 `mesh merger` 相关逻辑。

### SceneHandler
`public static void SceneHandler(SceneView view)`

**用途 / Purpose:** 处理 `scene handler` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MultiThreadedTestFunctions.MeshMerger(layout);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
