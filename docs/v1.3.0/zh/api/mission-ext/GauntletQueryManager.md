<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletQueryManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletQueryManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletQueryManager : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs`

## 概述

`GauntletQueryManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GauntletQueryManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

## 使用示例

```csharp
var manager = GauntletQueryManager.Current;
```

## 参见

- [完整类目录](../catalog)