<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiamondDebugManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DiamondDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class DiamondDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.Library/DiamondDebugManager.cs`

## 概述

`DiamondDebugManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `DiamondDebugManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLogLevel
`public int GetLogLevel()`

**用途 / Purpose:** 获取 `log level` 的当前值。

## 使用示例

```csharp
var manager = DiamondDebugManager.Current;
```

## 参见

- [完整类目录](../catalog)