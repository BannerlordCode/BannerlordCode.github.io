---
title: "SphereData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SphereData`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SphereData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SphereData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/SphereData.cs`

## 概述

`SphereData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SphereData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SphereData
`public struct SphereData(float radius, Vec3 origin)`

**用途 / Purpose:** 处理 `sphere data` 相关逻辑。

## 使用示例

```csharp
var value = new SphereData();
```

## 参见

- [完整类目录](../catalog)