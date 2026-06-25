---
title: "CoroutineManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CoroutineManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CoroutineManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class CoroutineManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/CoroutineManager.cs`

## 概述

`CoroutineManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CoroutineManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentTick` | `public int CurrentTick { get; }` |

## 主要方法

### AddCoroutine
`public void AddCoroutine(CoroutineDelegate coroutineMethod)`

**用途 / Purpose:** 向当前集合/状态中添加 `coroutine`。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var manager = CoroutineManager.Current;
```

## 参见

- [完整类目录](../catalog)