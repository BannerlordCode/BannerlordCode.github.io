---
title: "TickManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TickManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TickManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class TickManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/TickManager.cs`

## 概述

`TickManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `TickManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TickDelegate
`public delegate void TickDelegate()`

**用途 / Purpose:** 处理 `tick delegate` 相关逻辑。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var manager = TickManager.Current;
```

## 参见

- [完整类目录](../catalog)