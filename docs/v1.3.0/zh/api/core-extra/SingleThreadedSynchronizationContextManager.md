<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleThreadedSynchronizationContextManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SingleThreadedSynchronizationContextManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SingleThreadedSynchronizationContextManager`
**Base:** 无
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContextManager.cs`

## 概述

`SingleThreadedSynchronizationContextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SingleThreadedSynchronizationContextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Tick
`public static void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var manager = SingleThreadedSynchronizationContextManager.Current;
```

## 参见

- [完整类目录](../catalog)