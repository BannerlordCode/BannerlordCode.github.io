---
title: "CameraPoint"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CameraPoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CameraPoint

**命名空间:** TaleWorlds.MountAndBlade.View.Screens
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum CameraPoint`
**领域:** mission-ext

## 概述

`CameraPoint` 位于 `TaleWorlds.MountAndBlade.View.Screens`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartedRendering
`public bool StartedRendering()`

**用途 / Purpose:** 处理 `started rendering` 相关逻辑。

### GetSubTestName
`public string GetSubTestName(CameraPointTestType type)`

**用途 / Purpose:** 获取 `sub test name` 的当前值。

### GetRenderMode
`public EngineRenderDisplayMode GetRenderMode(CameraPointTestType type)`

**用途 / Purpose:** 获取 `render mode` 的当前值。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
CameraPoint example = CameraPoint.Value;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
