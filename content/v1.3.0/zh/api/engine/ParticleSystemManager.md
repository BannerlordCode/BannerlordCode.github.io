---
title: "ParticleSystemManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParticleSystemManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ParticleSystemManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystemManager`
**Base:** 无
**File:** `TaleWorlds.Engine/ParticleSystemManager.cs`

## 概述

`ParticleSystemManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ParticleSystemManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRuntimeIdByName
`public static int GetRuntimeIdByName(string particleSystemName)`

**用途 / Purpose:** 获取 `runtime id by name` 的当前值。

## 使用示例

```csharp
var manager = ParticleSystemManager.Current;
```

## 参见

- [完整类目录](../catalog)